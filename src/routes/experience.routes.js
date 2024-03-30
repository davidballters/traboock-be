import { Router } from 'express'

import * as experienceController from '../controllers/experience.controller.js'
import { authenticated } from '../middlewares/authenticated.js'

const experienceRouter = Router()

experienceRouter.get('/', authenticated, experienceController.getAll)

export default experienceRouter
