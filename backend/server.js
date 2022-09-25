const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/error-middleware')
const app = express()

const port = process.env.PORT || 3000

connectDB()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goal-routes'))
app.use('/api/users', require('./routes/user-routes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started  on port: ${port}`))
