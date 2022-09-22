// @desc get goals
// @route GET api/goals
// @access private
const getGoals = (req, res) => {
  res.status(200).json({ msg: 'get goals' })
}

// @desc create goal
// @route POST api/goals
// @access private
const createGoal = (req, res) => {
  res.status(200).json({ msg: 'create goal' })
}

// @desc update goal
// @route PUT api/goals/:id
// @access private
const updateGoal = (req, res) => {
  res.status(200).json({ msg: `update goal ${req.params.id}` })
}

// @desc delete goal
// @route DELETE api/goals/:id
// @access private
const deleteGoal = (req, res) => {
  res.status(200).json({ msg: `delete goal ${req.params.id}` })
}

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
}
