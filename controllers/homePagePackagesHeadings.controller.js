import { prisma } from "../db/prisma.js";

const activeRoute = "home-page-packages";
const activeRoute1 = "home-page-packages-headings";
const prismaTable = "homePagePackagesHeading";
const currentView = "homePagePackages";
const createPageTitle = "Create home page packages heading";
const detailPageTitle = "Detail home page packages heading";

export const createPage = async (req, res, next) => {
  try {
    const langs = await prisma.language.findMany({
      orderBy: {
        code: "desc",
      }
    })
    
    res.render(`${currentView}/create1`, { title: createPageTitle, langs, activeRoute, activeRoute1 });
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

    res.render(`${currentView}/detail1`, {data, title: detailPageTitle, langs, activeRoute, activeRoute1})
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