const asyncHandler = require('express-async -handler')

// @desc get goals
// @route GET api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'get goals' })
})

// @desc create goal
// @route POST api/goals
// @access private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('please add a text field')
  } else {
    res.status(200).json({ message: 'create goal' })
  }
})

// @desc update goal
// @route PUT api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `update goal ${req.params.id}` })
})

// @desc delete goal
// @route DELETE api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `delete goal ${req.params.id}` })
})

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
}
