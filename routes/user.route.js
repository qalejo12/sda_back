import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getUser);
router.delete('/:id', userController.remove);
router.put('/:id', userController.update);

export default router;