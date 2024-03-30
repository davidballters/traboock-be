import { Router } from 'express'

import * as usersController from '../controllers/users.controller.js'
import { authenticated } from '../middlewares/authenticated.js'

const userRouter = Router()

userRouter.get('/', authenticated, usersController.getAll)
userRouter.put('/', authenticated, usersController.updateProfile)
userRouter.delete('/', authenticated, usersController.deleteUser)

export default userRouter
