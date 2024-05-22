import express from 'express';
import VolunteerController from '../Controllers/volunteersController.js';

const router = express.Router();
const volunteerController = new VolunteerController();

router.post('/volunteer', volunteerController.createVolunteer);
router.get('/volunteer', volunteerController.getAllVolunteers); 
router.get('/volunteer/:id', volunteerController.getVolunteerById);
router.put('/volunteer/:id', volunteerController.updateVolunteer);
router.delete('/volunteer/:id', volunteerController.deleteVolunteer);

export default router;

