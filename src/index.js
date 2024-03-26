import app from './app.js'
import * as config from './config.js'
import usersRoutes from './routes/user.routes.js'
import indexRoutes from './routes/index.routes.js'

app.use(indexRoutes)
app.use(usersRoutes)

app.use(express.json())


// Here just start the server
app.listen(config.PORT, () => console.log(`Server on port http://localhost:${config.PORT}`))
