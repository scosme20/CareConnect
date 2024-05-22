import express from 'express';
import VolunteerController from '../Controllers/volunteersController.js';

const router = express.Router();
const volunteerController = new VolunteerController();

router.post('/volunteer', volunteerController.createVolunteerGroup.bind(volunteerController));
router.get('/volunteer', volunteerController.getAllVolunteerGroups.bind(volunteerController));
router.get('/volunteer/:id', volunteerController.getVolunteerGroupById.bind(volunteerController));
router.put('/volunteer/:id', volunteerController.updateVolunteerGroup.bind(volunteerController));
router.delete('/volunteer/:id', volunteerController.deleteVolunteerGroup.bind(volunteerController));

export default router;
