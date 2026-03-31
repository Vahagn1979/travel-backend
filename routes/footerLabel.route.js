import { Router } from "express";
import { upload } from "../middlewares/upload.js"
import * as footerLabelsController from "../controllers/footerLabel.controller.js";

const router = Router();

router.get("/", footerLabelsController.listPage);
router.get("/create", footerLabelsController.createPage);
router.get("/:id", footerLabelsController.detailPage);
// router.post("/add", upload.fields([{ name: "images" }]), footerLabelsController.add);
router.post("/add", upload.array("images"), footerLabelsController.add);
router.post("/addLink/:id", upload.array("images"), footerLabelsController.addLink);
// router.post("/add", upload.any(), footerLabelsController.add);
// router.post("/edit/:id",  upload.array("images"), footerLabelsController.edit);
router.post("/edit/:id", upload.any(), footerLabelsController.edit);
router.post("/bulk-delete", footerLabelsController.bulkDelete);

export default router;