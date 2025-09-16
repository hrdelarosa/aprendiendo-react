import express, { json } from 'express'
import cors from 'cors'

import { connection } from './database/db.js'

const app = express()
app.use(json())
app.use(cors())
app.disable('x-powered-by')

app.get('/contactos', async (req, res) => {
  const [contact] = await connection.query('SELECT * FROM contact;')
  // if (contact) res.json(contact)
  res.json(contact)
  // res.status(500).json({ message: '!Error en el servidor.' })
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listener on port http://localhost:${PORT}`)
})
