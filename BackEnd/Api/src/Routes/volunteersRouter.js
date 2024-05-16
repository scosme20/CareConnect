import express from 'express';

import VolunteerController from '../Controllers/volunteersController.js'

const router = express.Router();


router.post('/volunteer', VolunteerController.createVolunteerGroup);

router.get('/volunteer', VolunteerController.getAllVolunteerGroups);

router.get('/volunteer', VolunteerController.getVolunteerGroupById);

router.put('/volunteer', VolunteerController.updateVolunteerGroup);

router.delete('/volunteer', VolunteerController.deleteVolunteerGroup);

export default router