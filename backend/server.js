const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use('/api/goals', require('./routes/goal-routes'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
