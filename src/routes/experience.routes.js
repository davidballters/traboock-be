import { Router } from 'express'
import Joi from 'joi'

import * as experienceController from '../controllers/experience.controller.js'
import { validateBody } from '../middlewares/validateBody.js'
import { authenticated } from '../middlewares/authenticated.js'

const experienceRouter = Router()

experienceRouter.get('/', experienceController.getAll)

const createExperienceSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  destination: Joi.number().required(),
})

experienceRouter.post('/',[ validateBody(createExperienceSchema), authenticated ], experienceController.create)

const updateExperienceShema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
})

experienceRouter.put('/:id', validateBody(updateExperienceShema), experienceController.update)
experienceRouter.delete('/:id', experienceController.deleteExperience)

export default experienceRouter
