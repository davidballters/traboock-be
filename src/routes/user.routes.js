import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.send('OK desde users'))

export default router
