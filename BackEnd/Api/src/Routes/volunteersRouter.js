import express from 'express';
import VolunteerController from '../Controllers/volunteersController.js';

const router = express.Router();
const volunteerController = new VolunteerController();

router.post('/', volunteerController.createVolunteerGroup.bind(volunteerController));
router.get('/', volunteerController.getAllVolunteerGroups.bind(volunteerController));
router.get('/:id', volunteerController.getVolunteerGroupById.bind(volunteerController));
router.put('/:id', volunteerController.updateVolunteerGroup.bind(volunteerController));
router.delete('/:id', volunteerController.deleteVolunteerGroup.bind(volunteerController));

export default router;
