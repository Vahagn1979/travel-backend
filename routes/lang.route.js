import { Router } from "express";
import * as langController from "../controllers/lang.controller.js";

const router = Router();

router.get("/", langController.listPage);
router.get("/create", langController.createPage);
router.get("/:id", langController.detailPage);
// router.get("/:id/delete", langController.remove);
router.post("/add", langController.add);
router.post("/edit/:id", langController.edit);
router.post("/bulk-delete", langController.bulkDelete);

export default router;