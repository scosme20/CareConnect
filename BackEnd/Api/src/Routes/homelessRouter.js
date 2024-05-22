import express from 'express';

import HomelessController from '../Controllers/homelessController.js'

const router = express.Router();


router.post('/homeless', HomelessController.createHomeless);

router.get('/homeless', HomelessController.getAllHomeless);

router.get('/homeless/:id', HomelessController.getHomelessById);

router.put('/homeless/:id', HomelessController.updateHomeless);

router.delete('/homeless/:id', HomelessController.deleteHomeless);

export default router