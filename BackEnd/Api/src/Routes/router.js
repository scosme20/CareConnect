import express from 'express';
import donationRouter from '../Routes/donationRouter.js'
import familyRouter from '../Routes/familyRoutes.js'
import homelessRouter from '../Routes/homelessRouter.js'
import hostelRoutes from '../Routes/hostelRouter.js'
import volunteersRoutes from '../Routes/volunteersRouter.js'
import authRouter from './authRouter.js'

const router = express.Router();

router.use('/auth', authRouter);

router.use('/', donationRouter)

router.use('/', familyRouter)

router.use('/', homelessRouter)

router.use('/', hostelRoutes)

router.use('/', volunteersRoutes)

export default router