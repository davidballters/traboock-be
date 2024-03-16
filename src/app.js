import express from 'express'
import morgan from 'morgan'

import userRoutes from './routes/user.routes.js'

const app = express()

// Middlewares
app.use(morgan('dev')) // Logs the requests
app.use(express.json())

// Routes
app.use('/users', userRoutes)

// 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' })
})

export default app
