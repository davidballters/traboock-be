import { Router } from 'express'

import * as destinationController from '../controllers/destination.controller.js'
import { authenticated } from '../middlewares/authenticated.js'

const destinationRouter = Router()

destinationRouter.get('/', authenticated, destinationController.getAll)


export default destinationRouter