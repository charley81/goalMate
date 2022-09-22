const express = require('express')
const router = express.Router()

// get
router.get('/', (req, res) => {
  res.status(200).json({ msg: 'get goals' })
})

// create
router.post('/', (req, res) => {
  res.status(200).json({ msg: 'create goals' })
})

// update
router.put('/', (req, res) => {
  res.status(200).json({ msg: 'update goal' })
})

// delete
router.delete('/', (req, res) => {
  res.status(200).json({ msg: 'delete goal' })
})

module.exports = router
