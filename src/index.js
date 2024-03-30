import express from 'express'

import indexRoutes from './routes/index.routes.js'
import usersRoutes from './routes/user.routes.js'
import * as config from './config.js'
import { sequelize } from './db.js'
import app from './app.js'

// Routes
app.use(indexRoutes)
app.use(usersRoutes)

// Here just start the server
app.listen(config.PORT, () => {
    console.log(`Server on port http://localhost:${config.PORT}`)

    sequelize.sync()
        .then(() => console.log('Database connected and synchronized'))
        .catch((error) => console.log(error))
})
