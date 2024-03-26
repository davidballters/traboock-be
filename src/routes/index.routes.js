import { Router } from "express";
import {users} from '../controllers/index.controller.js'

const router = Router()


router.get('/users', users );

export default router;