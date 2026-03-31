import { Router } from "express";
import { upload } from "../middlewares/upload.js";
import * as homePagePackagesController from "../controllers/homePagePackages.controller.js";

const router = Router();

router.get("/", homePagePackagesController.listPage);
router.get("/create", homePagePackagesController.createPage);
router.get("/:id", homePagePackagesController.detailPage);
router.post("/add", upload.single("image"), homePagePackagesController.add);
router.post("/edit/:id", upload.single("image"), homePagePackagesController.edit);
router.post("/bulk-delete", homePagePackagesController.bulkDelete);

export default router;