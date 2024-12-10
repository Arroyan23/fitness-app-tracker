const express = require("express");
const app = express();
const cors = require("cors");

// untuk connect ke database
require("./mongodb/mongoose");

// middleware untuk mendapatkan req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// import route file
const signUpApi = require("./routes/signup");

// gunakan routes
app.use("/", signUpApi);

const port = 5000;
app.listen(port, () => {
  console.log(`App is Listening on port http://localhost:${port}`);
});
