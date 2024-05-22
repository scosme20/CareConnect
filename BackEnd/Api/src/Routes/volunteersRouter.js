import express from 'express';

import VolunteerController from '../Controllers/volunteersController.js'

const router = express.Router();


router.post('/volunteer', VolunteerController.createVolunteerGroup);

router.get('/volunteer', VolunteerController.getAllVolunteerGroups);

router.get('/volunteer/:id', VolunteerController.getVolunteerGroupById);

router.put('/volunteer/:id', VolunteerController.updateVolunteerGroup);

router.delete('/volunteer/:id', VolunteerController.deleteVolunteerGroup);

export default router