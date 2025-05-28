import express from 'express'
import { join } from 'path'
import router from './routes'

const APP_PORT = process.env.APP_PORT ?? 3000
const app = express()

app.use(express.json())
app.use('/api', router)
app.use(express.static(join(__dirname, '../frontend')))

app.listen(APP_PORT, () => {
  console.log(`App running on ${APP_PORT}`)
})
