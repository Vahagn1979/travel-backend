import { Router } from "express";
import * as aboutPageIntrosController from "../controllers/aboutPageIntros.controller.js";

const router = Router();

router.get("/", aboutPageIntrosController.listPage);
router.get("/create", aboutPageIntrosController.createPage);
router.get("/:id", aboutPageIntrosController.detailPage);
router.post("/add", aboutPageIntrosController.add);
router.post("/edit/:id", aboutPageIntrosController.edit);
router.post("/bulk-delete", aboutPageIntrosController.bulkDelete);

export default router;