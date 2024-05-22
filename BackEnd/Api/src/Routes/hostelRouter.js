import express from 'express';

import HostelController from '../Controllers/hostelController.js'

const router = express.Router();


router.post('/hostel', HostelController.createHostel);

router.get('/hostel', HostelController.getAllHostels);

router.get('/hostel/:id', HostelController.getHostelById);

router.put('/hostel/:id', HostelController.updateHostel);

router.delete('/hostel/:id', HostelController.deleteHostel);

export default router