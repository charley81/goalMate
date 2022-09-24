const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/error-middleware')
const app = express()

const port = process.env.PORT || 3000

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/routes-goals'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started  on port: ${port}`))
