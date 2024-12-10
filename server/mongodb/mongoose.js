const mongoose = require("mongoose");

const uri =
  "mongodb+srv://oyeng:hirolucu123@cluster0.1mud1.mongodb.net/fitnesstracker?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
