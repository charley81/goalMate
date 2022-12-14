const express = require('express')
const router = express.Router()
const {
  registerUser,
  getMe,
  loginUser,
} = require('../controllers/user-controller')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router
