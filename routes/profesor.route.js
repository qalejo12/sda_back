import { Router } from "express";
import { profesorController } from "../controllers/profesor.controller.js";

const router = Router();

router.get('/', profesorController.getAll);
router.post('/', profesorController.create);


export default router;