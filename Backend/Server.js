import express from 'express'
import '../Backend/db.js'
import cors from 'cors'
import Routes from './Routes.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use("/api/v1/auth", Routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
  console.log(`Example app listening on port ${port}`)
})
