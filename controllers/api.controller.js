import {prisma} from "../db/prisma.js";
import expressListEndpoints from "express-list-endpoints";
import apiRouter from "../routes/api.route.js";


export const apiList = (req, res, next) => {
    const data = expressListEndpoints(apiRouter);
    const fullData = data.map(elem => `${req.baseFullUrl}/api${elem.path}`);
    fullData.shift();

    res.render("api", {title: "Travel API", data: fullData, version: process.env.VERSION, layout: false});
};

export const logo = async (req, res, next) => {
    try {
        const data = await prisma.logo.findMany();
        res.status(200).send(data[0]);
    } catch (error) {
        next(error);
    }
};

export const navbars = async (req, res, next) => {
    const {lang} = req.query || undefined;
    try {
        const data = await prisma.navbar.findMany({
            where: {
                lang,
            },
            orderBy: [
                {lang: "desc"},
                {createdAt: "asc"}
            ]
        });

        res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};

export const languages = async (req, res, next) => {
    try {
        const data = await prisma.language.findMany({
            orderBy: [
                {code: "desc"},
                {createdAt: "asc"}
            ]
        });
        res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};

export const homePageSliders = async (req, res, next) => {
    const {lang} = req.query || undefined;

    try {
        const data = await prisma.homePageSlider.findMany({
            where: {
                lang,
            },
            orderBy: [
                {lang: "desc"},
                {createdAt: "asc"}
            ]
        });

        const fullData = data.map(elem => {
            return {
                ...elem,
                img: `${req.baseFullUrl}${elem.img}`
            }
        })

        res.status(200).send(fullData);
    } catch (error) {
        next(error);
    }
};

export const homePagePackagesHeadings = async (req, res, next) => {
    const { lang } = req.query || undefined;

    try {
        const data = await prisma.homePagePackagesHeading.findMany({
            where: {
                lang
            },
            orderBy: [
                {lang: "desc"},
                {createdAt: "asc"}
            ]
        });
        
        res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};

export const homePagePackages = async (req, res, next) => {
    const { lang } = req.query || undefined;

    try {
        const data = await prisma.homePagePackage.findMany({
            where: {
                lang,
            },
            orderBy: [
                {lang: "desc"},
                {createdAt: "asc"}
            ]
        });

        const fullData = data.map(elem => ({
            ...elem,
            image: `${req.baseFullUrl}${elem.image}`
        }));

        res.status(200).send(fullData);
    } catch (error) {
        next(error);
    }
};

export const aboutPageIntros = async (req, res, next) => {
    const {lang} = req.query || undefined;

    try {
        const data = await prisma.aboutPageIntro.findMany({
            where: {
                lang,
            },
            orderBy: [
                {lang: "desc"},
                {createdAt: "asc"}
            ]
        });

        res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};

export const aboutPageTeamHeadings = async (req, res, next) => {
    const { lang } = req.query || undefined;

    try {
        const data = await prisma.aboutPageTeamHeading.findMany({
            where: {
                lang,
            },
            orderBy: [
                {lang: "desc"},
                {createdAt: "asc"}
            ]
        });

        res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};

export const aboutPageTeams = async (req, res, next) => {
    const { lang } = req.query || undefined;

    try {
       const data = await prisma.aboutPageTeam.findMany({
        where: {
            lang,
        },
        orderBy: [
            {lang: "desc"},
            {createdAt: "asc"}
        ]
       });

       const fullData = data.map(elem => ({
        ...elem,
        image: `${req.baseFullUrl}${elem.image}`
       }));

       res.status(200).send(fullData);
    } catch (error) {
        next(error);
    }
};

export const contactPageContents = async (req, res, next) => {
    const { lang } = req.query || undefined;

    try {
        const data = await prisma.contactPageContent.findMany({
            where: { lang, },
            orderBy: [
                {lang: "desc"},
                {createdAt: "asc"}
            ]
        });

        res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};

export const footerLabels = async (req, res, next) => {
    const { lang } = req.query || undefined;

    try {
        const data = await prisma.footerLabel.findMany({
            where: {lang},
            orderBy: [
                {lang: "desc"},
                {createdAt: "asc"}
            ],
            include: {
                social_links : true,
            }
        });

        const fullData = data.map(elem => {
            return {
                ...elem,
                social_links: elem.social_links.map(link => ({
                    ...link,
                    image: `${req.baseFullUrl}${link.image}`
                }))
            }
        })

        res.status(200).send(fullData);
    } catch (error) {
        next(error);
    }
};
