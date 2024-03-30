import { Router } from 'express'
import Joi from 'joi'

import * as authController from '../controllers/auth.controller.js'
import { validateBody } from '../middlewares/validateBody.js'

const authRouter = Router()

const signInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})
authRouter.post('/sign-in', validateBody(signInSchema), authController.signIn)

const signUPSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})
authRouter.post('/sign-up', validateBody(signUPSchema), authController.signUp)

export default authRouter
