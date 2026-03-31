import { Router } from "express";
import { upload } from "../middlewares/upload.js";
import * as teamHeadingsController from "../controllers/aboutPageTeamHeadings.controller.js";

const router = Router();

router.get("/create", teamHeadingsController.createPage);
router.get("/:id", teamHeadingsController.detailPage);
router.post("/add", upload.single("img"), teamHeadingsController.add);
router.post("/edit/:id", upload.single("img"), teamHeadingsController.edit);
router.post("/bulk-delete", teamHeadingsController.bulkDelete);

export default router;