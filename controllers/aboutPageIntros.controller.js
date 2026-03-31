import { prisma } from "../db/prisma.js";

const activeRoute = "about-page-intros";
const prismaTable = "aboutPageIntro";
const currentView = "aboutPageIntros";
const listPageTitle = "About page intros";
const createPageTitle = "Create about page intro";
const detailPageTitle = "Detail about page intro";

export const listPage = async (req, res, next) => {
  const { lang } = req.query || undefined;
  
  try {
    const langs = await prisma.language.findMany({
      orderBy: {
        code: "desc"
      }
    })

    const data = await prisma[prismaTable].findMany({
          where: {
            lang,
          },
          orderBy: [
            {lang: "desc"},
            {createdAt: "asc"}
          ],
        });

    res.render(`${currentView}/index`, { data, title: listPageTitle, langs, activeRoute });
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

  try {
    await prisma[prismaTable].create({
      data,
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
    })

    if(!data) {
      // throw new Error();
     return  res.redirect(`admin/${activeRoute}`)
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

  try {
    await prisma[prismaTable].update({
      where: {
        id
      },
      data
    })

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