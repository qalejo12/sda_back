import { Router } from "express";
import { teacherController } from "../controllers/teacher.controller.js";

const router = Router();

router.get('/', teacherController.getAll);
router.get('/:id', teacherController.getTeacher);
router.delete('/:id', teacherController.remove);
router.put('/:id', teacherController.update);


export default router;