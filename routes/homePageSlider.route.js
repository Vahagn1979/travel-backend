import { Router } from "express";
import { upload } from "../middlewares/upload.js";
import * as homePageSliderController from "../controllers/homePageSlider.controller.js";

const router = Router();

router.get("/", homePageSliderController.listPage);
router.get("/create", homePageSliderController.createPage);
router.get("/:id", homePageSliderController.detailPage);
// router.get("/:id/delete", homePageSliderController.remove);
router.post("/add", upload.single("img"), homePageSliderController.add);
router.post("/edit/:id", upload.single("img"), homePageSliderController.edit);
router.post("/bulk-delete", homePageSliderController.bulkDelete);

export default router;