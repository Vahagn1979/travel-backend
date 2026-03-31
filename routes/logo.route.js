import { Router } from "express";
import * as logoController from "../controllers/logo.controller.js";

const router = Router();

router.get("/", logoController.listPage);
router.get("/create", logoController.createPage);
router.get("/:id", logoController.detailPage);
// router.get("/:id/delete", logoController.remove);
router.post("/add", logoController.add);
router.post("/edit/:id", logoController.edit);
router.post("/bulk-delete", logoController.bulkDelete);

export default router;