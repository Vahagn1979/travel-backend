import { prisma } from "../db/prisma.js";
import path from "path";
import fs from "fs";

const activeRoute = "footer-labels";
const prismaTable = "footerLabel";
const currentView = "footerLabels";
const listPageTitle = "Footer labels";
const createPageTitle = "Create footer label";
const detailPageTitle = "Detail footer label";

export const listPage = async (req, res, next) => {
  const { lang } = req.query || undefined;
  
  try {
    const langs = await prisma.language.findMany({
      orderBy: {
        code: "desc"
      }
    })

    // const data1 = await prisma[prismaTable1].findMany({
    //   where: {
    //     footerLabel: {
    //       lang,
    //     },
    //   },
    //   include: {
    //         footerLabel: true
    //   },
    //   orderBy: [
    //     {
    //       footerLabel:{
    //         lang: "desc"
    //       }
    //     },
    //     {createdAt: "asc"}
    //   ],
    // });

    const data = await prisma[prismaTable].findMany({
      where: {
        lang,
      },
      include: {
        social_links: true
      },
      orderBy: [
        {lang: "desc"},
        {createdAt: "asc"}
      ],
    });
    // console.log(data1);
    
    res.render(`${currentView}/index`, {data, langs,
                                      title: listPageTitle,
                                      activeRoute});
  } catch (error) {
    next(error);
  }
};

export const createPage = async (req, res, next) => {
  try {
    const langs = await prisma.language.findMany({
      orderBy: [
        { code: "desc",},
        {createdAt: "asc"}
      ]
    });

    res.render(`${currentView}/create`, { title: createPageTitle, langs, activeRoute });
  } catch (error) {
    next(error)
  }
};

export const add = async (req, res, next) => {
  try {
    const { lang, title, credit, urls } = req.body;
    const files = req.files;

    // normalize (always array)
    const urlsArray = Array.isArray(urls) ? urls : [urls];

    const existingLable = await prisma[prismaTable].findFirst({
      where: {
        lang,
      },
      include: {
        social_links: true
      }
    });

    if (existingLable) {
      if(files) {
        files.forEach( async (file) => {
          const img = file.filename;
          const imagePath = path.join(process.cwd(), "public/uploads/", img.replace(/^\/+/, ""));
  
          try {
             await fs.promises.unlink(imagePath);
            } catch (error) {
              console.error("Failed to delete image", error.message);
            }
  
        })
      }
      return res.render(`${currentView}/detail`, {data: existingLable, title: detailPageTitle,  activeRoute});
    }

    await prisma[prismaTable].create({
      data: {
        lang,
        title,
        credit,
        social_links: {
          create: urlsArray.map((url, index) => ({
            url,
            image: `/uploads/${files[index]?.filename}` || "" // multer needed
          }))
        }
      }
    });

    res.redirect(`/admin/${activeRoute}`);
  } catch (error) {
    next(error);
  }
};

export const detailPage = async (req, res, next) => {
  const {id} = req.params;

  try {
    const data = await prisma[prismaTable].findUnique({
      where: {
        id,
      },
      include: {
        social_links: true
      },
    })

    if(!data) {
      // throw new Error();
     return  res.redirect(`admin/${activeRoute}`)
    }

    res.render(`${currentView}/detail`, {data, title: detailPageTitle, activeRoute})
  } catch (error) {
    next(error);
  };
};

export const edit = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { lang, title, credit, urls, linkIds, oldImages } = req.body;
    const files = req.files;

    const fileMap = {};

    req.files.forEach(file => {
      const index = file.fieldname.split("_")[1];  
      fileMap[index] = file;
    });

    const urlsArr = Array.isArray(urls) ? urls : [urls];
    const idsArr = linkIds ? (Array.isArray(linkIds) ? linkIds : [linkIds]) : [];
    const oldImagesArr = Array.isArray(oldImages) ? oldImages : [oldImages];
    
    // -----------get existing links from DB---------------
    const existingLinks = await prisma.socialLink.findMany({
      where: { footerLabelId: id }
    });
  
    const existingIds = existingLinks.map((link) => {
      if(!idsArr.includes(link.id)) {
        const img = link.image;
        const imagePath = path.join(process.cwd(), "public", img.replace(/^\/+/, ""));
      
        fs.unlink(imagePath, () => console.error("Failed to delete image"))
      }
      return link.id;    
    } );
    
    // ------IDs that remain in form-----------
    const incomingIds = idsArr.filter(Boolean);
    

    // ------DELETE removed links-----------
    const idsToDelete = existingIds.filter(id => !incomingIds.includes(id));

    await prisma.socialLink.deleteMany({
      where: { id: { in: idsToDelete } }
    });
    
    //-------UPDATE + CREATE-----------
    const updates = urlsArr.map((url, index) => {
      const file = fileMap[index]; 
      const existingId = idsArr[index] || "";

      const imagePath = file
        ? `/uploads/${file.filename}`
        : oldImagesArr[index];

      if (file && oldImagesArr[index]) {
        const oldPath = path.join(
          process.cwd(),
          "public",
          oldImagesArr[index].replace(/^\/+/, "")
        );

        fs.unlink(oldPath, () => {});
      }; 

      if (existingId) {
        return prisma.socialLink.update({
          where: { id: existingId },
          data: { 
            url: url || "", 
            image: imagePath || "",
            footerLabelId: id
          }
        });
      }
    });

    // ----------UPDATE parent---------
    const updateParent = prisma.footerLabel.update({
      where: { id },
      data: { lang, title, credit }
    });

    await Promise.all([updateParent, ...updates]);

    res.redirect(`/admin/${activeRoute}`);
  } catch (error) {
    next(error);
  }
};

export const addLink = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { lang, title, credit, urls } = req.body;
    const files = req.files;

    const urlsArr = Array.isArray(urls) ? urls : [urls];
    
    //------- CREATE LINKS-----------
    const creates = urlsArr.map((url, index) => {
      const file = files[index]; 

      const imagePath = `/uploads/${file.filename}`;

      return prisma.socialLink.create({
        data: {
          url: url || "",
          image: imagePath || "",
          footerLabelId: id
        }
      });
    });

    // ----------UPDATE parent---------
    const updateParent = prisma.footerLabel.update({
      where: { id },
      data: { lang, title, credit }
    });

    await Promise.all([updateParent, ...creates]);

    res.redirect(`/admin/${activeRoute}`);
  } catch (error) {
    next(error);
  }
};

export const bulkDelete = async (req, res, next) => {
  const {ids} = req.body;

  try {
    if(!ids) return res.redirect(`/admin/${activeRoute}`);

    const idArray = ids.split(",");

    const items = await prisma[prismaTable].findMany({
      where: {
        id: {
          in: idArray
        }
      },
      include: {
        social_links: true
      }
    });

    for(const item of items) {
      item.social_links.forEach(async (link) => {
        const img = link.image;

        if(img) {
          const imagePath = path.join(process.cwd(), "public", img.replace(/^\/+/, ""));
  
          try {
           await fs.promises.unlink(imagePath);
          } catch (error) {
            console.error("Failed to delete image", error.message);
          }
        }
      })
      
    }

    await prisma[prismaTable].deleteMany({
      where: {
        id: {
          in: idArray,
        }
      }
    });

    res.redirect(`/admin/${activeRoute}`);
  } catch (error) {
    next(error);
  }
};