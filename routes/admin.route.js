import { Router } from "express";
import { isNotAuthenticatied, isAuthenticated } from "../middlewares/checkAuthentication.js";
import * as adminController from "../controllers/admin.controller.js";

const router = Router();

router.get("/login", isAuthenticated, adminController.login_get);
router.post("/login", isAuthenticated, adminController.login_post);

router.use(isNotAuthenticatied);

router.get("/", adminController.getAdminDashboard);

router.get("/change-admin-name", adminController.changeAdminName_get);
router.post("/change-admin-name", adminController.changeAdminName_post);

router.get("/change-admin-password", adminController.changeAdminPassword_get);
router.post("/change-admin-password", adminController.changeAdminPassword_post);

router.get("/logout", adminController.logout);


export default router;