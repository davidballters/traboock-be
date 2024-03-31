import { Router } from 'express'
import Joi from 'joi'

import * as tourController from '../controllers/tour.controller.js'
import { validateBody } from '../middlewares/validateBody.js'

// import { authenticated } from '../middlewares/authenticated.js'

const tourRouter = Router()

tourRouter.get('/', tourController.getrAll)

const createTourSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
})

tourRouter.post('/', validateBody(createTourSchema), tourController.create)

const updateTourSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
})
  
tourRouter.put('/:id',validateBody(updateTourSchema), tourController.update)
tourRouter.delete('/:id', tourController.deleteTour)


export default tourRouter