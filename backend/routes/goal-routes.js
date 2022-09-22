const express = require('express')
const router = express.Router()
const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goal-controller')

// get and post
router.route('/').get(getGoals).post(createGoal)

// update and delete
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router
