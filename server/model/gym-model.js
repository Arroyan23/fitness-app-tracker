// model untuk gym
const mongoose = require("mongoose");

const userGymUnique = mongoose.model("gymex", {
  exerciseType: {
    type: String,
    require: true,
  },
  excerciseDate: {
    type: String,
    require: true,
  },
  excerciseDesc: {
    type: String,
    require: true,
  },
  caloriesBurn: {
    type: String,
    require: true,
  },
  profile: {
    type: String,
    require: true,
  },
});

// const {exerciseType, exerciseDate, exerciseDesc, caloriesBurn} = req.body;
module.exports = userGymUnique;
