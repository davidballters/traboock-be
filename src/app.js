import express from 'express'
import morgan from 'morgan'

import destinationRoutes from './routes/destination.routes.js'
import experienceRoutes from './routes/experience.routes.js'
import indexRoutes from './routes/index.routes.js'
import authRouter from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import blogRoutes from './routes/blog.routes.js'
import tourRoutes from './routes/tour.routes.js'

const app = express()

// Middlewares
app.use(morgan('dev')) // Logs the requests
app.use(express.json())

// Routes
app.use('/', indexRoutes)
app.use('/users', userRoutes)
app.use('/auth', authRouter)
app.use('/blogs', blogRoutes)
app.use('/destinations', destinationRoutes)
app.use('/experiences', experienceRoutes)
app.use('/tours', tourRoutes)

// 404
app.use((req, res, next) => res.status(400).json({ message: 'page not found' }))

export default app
