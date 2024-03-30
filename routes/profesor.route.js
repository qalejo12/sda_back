import { Router } from "express";
import { profesorController } from "../controllers/profesor.controller.js";

const router = Router();

router.get('/', profesorController.getAll);
router.post('/', profesorController.create);
router.delete('/:id', profesorController.remove);
router.put('/:id', profesorController.update);


export default router;