import { prisma } from "../db/prisma.js";
import path from "path";
import fs from "fs";

const activeRoute = "home-page-packages";
const activeRoute1 = "home-page-packages-headings";
const prismaTable = "homePagePackage";
const prismaTable1 = "homePagePackagesHeading";
const currentView = "homePagePackages";
const listPageTitle = "Home page packages";
const listPageTitle1 = "Home page packages headings";
const createPageTitle = "Create home page package";
const detailPageTitle = "Detail home page package";

export const listPage = async (req, res, next) => {
  const { lang } = req.query || undefined;
  
  try {
    const langs = await prisma.language.findMany({
      orderBy: {
        code: "desc"
      }
    })

    const data1 = await prisma[prismaTable1].findMany({
      where: {
        lang,
      },
      orderBy: [
        {lang: "desc"},
        {createdAt: "asc"}
      ],
    });

    const data = await prisma[prismaTable].findMany({
      where: {
        lang,
      },
      orderBy: [
        {lang: "desc"},
        {createdAt: "asc"}
      ],
    });

    res.render(`${currentView}/index`, {data, data1, langs,
                                      title: listPageTitle, title1: listPageTitle1,
                                      activeRoute, activeRoute1});
  } catch (error) {
    next(error);
  }
};

export const createPage = async (req, res, next) => {
  try {
    const langs = await prisma.language.findMany({
      orderBy: {
        code: "desc",
      }
    })
    
    res.render(`${currentView}/create`, { title: createPageTitle, langs, activeRoute });
  } catch (error) {
    next(error)
  }
};

export const add = async (req, res, next) => {
  const data = req.body;
  const file = req.file;
  
    try {
      await prisma[prismaTable].create({
        data: {
          lang: data.lang,
          discount: data.discount,
          title: data.title,
          price: data.price,
          image: `/uploads/${file.filename}`
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
      }
    });

    if(!data) {
      // throw new Error();
     return  res.redirect(`/admin/${activeRoute}`)
    }

    const langs = await prisma.language.findMany({
      orderBy: {
        code: "asc"
      }
    })

    res.render(`${currentView}/detail`, {data, title: detailPageTitle, langs, activeRoute})
  } catch (error) {
    next(error);
  };
};

export const edit = async (req, res, next) => {
  const {id} = req.params;
  const data = req.body;
  const file = req.file;

  const imagePath = file ? `/uploads/${file.filename}` : data.oldImage;

  try {
    await prisma[prismaTable].update({
      where: {
        id
      },
      data: {
        lang: data.lang,
        discount: data.discount,
        title: data.title,
        price: data.price,
        image: imagePath
      }
    });

    if(file && data.oldImage) {
      const oldImagePath = path.join(process.cwd(), "public", data.oldImage.replace(/^\/+/, ""));
      fs.unlink(oldImagePath, err => {
        if(err) console.error("Failed to delete old image", err.message);
      })
    }

    res.redirect(`/admin/${activeRoute}`)
  } catch (error) {
    next(error);
  }
};

export const bulkDelete = async (req, res, next) => {
  const {ids} = req.body;

  try {
    if(!ids) return res.redirect(`admin/${activeRoute}`);

    const idArray = ids.split(",");

    const items = await prisma[prismaTable].findMany({
      where: {
        id: {
          in: idArray,
        },
      },
    });

    for(const item of items) {
      if(item.image) {
        const imgPath = path.join(process.cwd(), "public", item.image.replace(/^\/+/, ""));

        try {
          await fs.promises.unlink(imgPath);
        } catch (error) {
          console.error("Failed to delete image", error.message);
        }
      }
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
}