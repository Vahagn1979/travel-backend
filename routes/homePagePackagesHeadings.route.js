import { Router } from "express";
import { upload } from "../middlewares/upload.js";
import * as packagesHeadingsController from "../controllers/homePagePackagesHeadings.controller.js";

const router = Router();

router.get("/create", packagesHeadingsController.createPage);
router.get("/:id", packagesHeadingsController.detailPage);
router.post("/add", upload.single("img"), packagesHeadingsController.add);
router.post("/edit/:id", upload.single("img"), packagesHeadingsController.edit);
router.post("/bulk-delete", packagesHeadingsController.bulkDelete);

export default router;