import express from 'express';
import 'dotenv/config'

const PORT = process.env.APP_PORT || 3000  //fallbacks son paraque el margen de error sea cero

const app = express()

app.get('/obteniendo', (req,res)=> res.send('obteniendo algo')) 

app.put('/obteniendo', (req,res)=> res.send('actualizando algo'))

app.post('/obteniendo', (req,res)=> res.send('creando algo'))

app.delete('/obteniendo', (req,res)=> res.send('eliminando algo'))


app.listen(PORT,(error)=>{
    if (error) {
        console.log("Error in server setup")
        return 
    }
    console.log("Server listening on Port", PORT)
})
