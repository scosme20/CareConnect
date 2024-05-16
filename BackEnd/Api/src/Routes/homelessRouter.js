import express from 'express';

import HomelessController from '../Controllers/homelessController.js'

const router = express.Router();


router.post('/homeless', HomelessController.createHomeless);

router.get('/homeless', HomelessController.getAllHomeless);

router.get('/homeless', HomelessController.getHomelessById);

router.put('/homeless', HomelessController.updateHomeless);

router.delete('/homeless', HomelessController.deleteHomeless);

export default router