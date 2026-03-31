import { Router } from "express";
import { upload } from "../middlewares/upload.js";
import * as aboutPageTeamsController from "../controllers/aboutPageTeams.controller.js";

const router = Router();

router.get("/", aboutPageTeamsController.listPage);
router.get("/create", aboutPageTeamsController.createPage);
router.get("/:id", aboutPageTeamsController.detailPage);
router.post("/add", upload.single("image"), aboutPageTeamsController.add);
router.post("/edit/:id", upload.single("image"), aboutPageTeamsController.edit);
router.post("/bulk-delete", aboutPageTeamsController.bulkDelete);

export default router;