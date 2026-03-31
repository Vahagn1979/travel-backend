import { Router } from "express";
import { isNotAuthenticatied } from "../middlewares/checkAuthentication.js";
import adminRouter from "./admin.route.js";
import logoRouter from "./logo.route.js";
import navbarRouter from "./navbar.route.js";
import langRouter from "./lang.route.js"; 
import homePageSliderRouter from "./homePageSlider.route.js";
import homePagePackagesRouter from "./homePagePackages.route.js";
import packagesHeadingRouter from "./homePagePackagesHeadings.route.js";
import aboutPageIntrosRouter from "./aboutPageIntros.route.js";
import aboutPageTeamsRouter from "./aboutPageTeams.route.js";
import teamHeadingsRouter from "./aboutPageTeamHeadings.route.js";
import contactPageContentsRouter from "./contactPageContent.route.js";
import footerLabelsRouter from "./footerLabel.route.js";
import apiRouter from "./api.route.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("home", {title: "Travel", version: process.env.VERSION, layout: false});
})
router.use("/admin", adminRouter);
router.use("/api", apiRouter);

router.use("/admin", isNotAuthenticatied);

router.use("/admin/logos", logoRouter);
router.use("/admin/navbars", navbarRouter);
router.use("/admin/languages", langRouter);
router.use("/admin/home-page-sliders", homePageSliderRouter);
router.use("/admin/home-page-packages", homePagePackagesRouter);
router.use("/admin/home-page-packages-headings", packagesHeadingRouter);
router.use("/admin/about-page-intros", aboutPageIntrosRouter);
router.use("/admin/about-page-teams", aboutPageTeamsRouter);
router.use("/admin/about-page-team-headings", teamHeadingsRouter);
router.use("/admin/contact-page-contents", contactPageContentsRouter);
router.use("/admin/footer-labels", footerLabelsRouter);


export default router;