import { Router } from 'express'
import Joi from 'joi'

import * as blogController from '../controllers/blog.controller.js'
import { validateBody } from '../middlewares/validateBody.js'

// TOOD: Add authenticated middleware
import { authenticated } from '../middlewares/authenticated.js'

const blogRouter = Router()

blogRouter.get('/', blogController.getAll)

const createBlogSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
})
blogRouter.post('/',[ validateBody(createBlogSchema), authenticated ], blogController.create)

const updateBlogSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
})
blogRouter.put('/:id', validateBody(updateBlogSchema), blogController.update)
blogRouter.delete('/:id', blogController.deleteBlog)

export default blogRouter
