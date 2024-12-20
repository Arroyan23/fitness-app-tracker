// model untuk data lari pada halaman tersebut
const mongoose = require("mongoose");

const modelRunData = mongoose.model("rundata", {
  runType: {
    type: String,
    require: true,
  },
  runDate: {
    type: String,
    require: true,
  },
  runDesc: {
    type: String,
    require: true,
  },
  runCalories: {
    type: String,
    require: true,
  },
  profile: {
    type: String,
    require: true,
  },
});

module.exports = modelRunData;
