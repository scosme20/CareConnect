import express from 'express';

import DonationController from '../Controllers/donationController.js';

const router = express.Router();

router.post('/donation', DonationController.createDonation)


router.get('/donation', DonationController.getAllDonations)


router.get('/donation/:id', DonationController.getDonationById)


router.put('/donation/:id', DonationController.updateDonation)


router.delete('/donation/:id', DonationController.deleteDonation)

export default router;