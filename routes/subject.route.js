import { Router } from "express";
import { subjectController } from "../controllers/subject.controller.js";

const router = Router();


router.get('/', subjectController.getAll);
router.get('/:id', subjectController.getSubject);
router.post('/', subjectController.create);
router.delete('/:id', subjectController.remove);
router.put('/:id', subjectController.update);

export default router;