import { Router } from 'express'
import Joi from 'joi'

import * as destinationController from '../controllers/destination.controller.js'
import { validateBody } from '../middlewares/validateBody.js'

// import { authenticated } from '../middlewares/authenticated.js'

const destinationRouter = Router()

destinationRouter.get('/', destinationController.getAll)

const createDestinationSschema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
})

destinationRouter.post('/', validateBody(createDestinationSschema), destinationController.create)

const updateDestinationSschema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
})

destinationRouter.put('/:id',validateBody(updateDestinationSschema), destinationController.update)
destinationRouter.delete('/:id',destinationController.deleteDestination)

export default destinationRouter