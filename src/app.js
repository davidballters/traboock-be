import express from 'express'
import morgan from 'morgan'

import indexRoutes from './routes/index.routes.js'
import authRouter from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'

const app = express()

// Middlewares
app.use(morgan('dev')) // Logs the requests
app.use(express.json())

// Routes
app.use('/', indexRoutes)
app.use('/users', userRoutes)
app.use('/auth', authRouter)

// 404
app.use((req, res, next) => { 
  res.status(400).json({ message: 'page not found' })
})

export default app



