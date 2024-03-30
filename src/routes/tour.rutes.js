import { Router } from 'express'

import * as tourController from '../controllers/tour.controller.js'
import { authenticated } from '../middlewares/authenticated.js'

const tourRouter = Router()

tourRouter.get('/', authenticated, tourController.getAll)


export default tourRouter