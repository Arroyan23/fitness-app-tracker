// halaman untuk mendapatkan data dari priv info database
// dengan keunikan data di json web token
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userGymUnique = require("../model/gym-model");

// untuk menambah data ke dalam database
router.post("/add-priv-data-gym", async (req, res) => {
  try {
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, "IaslPSkd129423");
    const objectId = decoded.id;

    const { exerciseType, exerciseDate, exerciseDesc, caloriesBurn } = req.body;

    const newGymData = new userGymUnique({
      exerciseType,
      exerciseDate,
      exerciseDesc,
      caloriesBurn,
      profile: objectId,
    });

    // tunggu dulu data akan dimasukkan ke dalam database dan menampilkan
    await newGymData.save();
    res
      .status(200)
      .json({ message: "Data berhasil di simpan ke dalam database" });
  } catch (error) {
    console.log(`Something When Error: ${error}`);
  }
});

// untuk mendapatkan data unique nya

module.exports = router;
