// async functions because mongoose gives us back a promise
// using async await we would use try / catch...instead what we are doing is using a npm package called express-async-handler to hanler our errors

const asyncHandler = require('express-async-handler')

// @params getGoals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'get goals' })
})

// @params postGoal
// @route POST /api/goals
// @access private
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('please add a text field')
  } else {
    res.status(200).json({ message: 'post goal' })
  }
})

// @params updateGoal
// @route PUT api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `updated message ${req.params.id}` })
})

// @params deleteGoal
// @route DELETE api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `deleted goal ${req.params.id}` })
})

module.exports = {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
}
