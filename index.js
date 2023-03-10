const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000
const dbConnect = require('./config/dbConnect')
const authRouter = require('./routes/authRoute')
const bodyParser = require('body-parser')

dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use('/', (req, res) => {
//   res.send('Hello from server side')
// })
app.use('/api/user', authRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port  ${PORT}`)
})
