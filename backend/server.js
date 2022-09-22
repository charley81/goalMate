const express = require('express')
const dotenv = require('dotenv')
const { errorHandler } = require('./middleware/error-middleware.js')
const PORT = process.env.PORT || 3000

const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goal-routes'))

// error handler middleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
