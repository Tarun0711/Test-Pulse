const express = require('express')
const mongoose = require('mongoose')
const { route } = require('./routes/TodoRoute')
const cors = require("cors")

const routes = require('./routes/TodoRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`Connected to MongoDB...`))
.catch((err)=> console.log(err))

   app.use(routes)

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))