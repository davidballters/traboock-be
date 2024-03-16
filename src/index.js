import app from './app.js'
import * as config from './config.js'

// Here just start the server
app.listen(config.PORT, () => console.log(`Server on port http://localhost:${config.PORT}`))
