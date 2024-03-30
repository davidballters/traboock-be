import { Router } from 'express'

import * as blogController from '../controllers/blog.controller.js'
import { authenticated } from '../middlewares/authenticated.js'

const blogRouter = Router()

blogRouter.get('/', authenticated, blogController.getAll)


export default blogRouter