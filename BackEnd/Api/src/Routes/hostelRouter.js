import express from 'express';

import HostelController from '../Controllers/hostelController.js'

const router = express.Router();


router.post('/hostel', HostelController.createHostel);

router.get('/hostel', HostelController.getAllHostels);

router.get('/hostel', HostelController.getHostelById);

router.put('/hostel', HostelController.updateHostel);

router.delete('/hostel', HostelController.deleteHostel);

export default router