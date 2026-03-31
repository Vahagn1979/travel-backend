import { Router } from "express";
import * as contactPageController from "../controllers/contactPageContents.controller.js";

const router = Router();

router.get("/", contactPageController.listPage);
router.get("/create", contactPageController.createPage);
router.get("/:id", contactPageController.detailPage);
router.post("/add", contactPageController.add);
router.post("/edit/:id", contactPageController.edit);
router.post("/bulk-delete", contactPageController.bulkDelete);

export default router;