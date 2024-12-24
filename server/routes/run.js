// membuat fungsi untuk data lari tambah kurang dan sebagainya
const express = require("express");
const router = express.Router();
const modelRunData = require("../model/run-model");
const jwt = require("jsonwebtoken");

// untuk mengambil token jwt

router.post("/add-run-data", async (req, res) => {
  try {
    const { runType, runDate, runDesc, runCalories } = req.body;
    // buat datanya

    const token = req.header("Authorization");
    const decoded = jwt.verify(token, "IaslPSkd129423");
    const getObjectId = decoded.id;
    // ambil object unik dari token
    const newModelRunData = new modelRunData({
      runType,
      runDate,
      runDesc,
      runCalories,
      profile: getObjectId,
    });

    // masukkan ke dalam database
    await newModelRunData.save();

    // kembalikan statusnya menjadi 200
    res
      .status(200)
      .json({ message: "data berhasil di unggah ke dalam database" });
  } catch (error) {
    console.log(`Something when error: \n ${error}`);
  }
});

// membuat fungsi untuk membaca data
router.get("/get-private-run-data", async (req, res) => {
  // dapatkan berdasarkan token dengan object id nya
  const token = req.header("Authorization");
  const decoded = jwt.verify(token, "IaslPSkd129423");
  const getObjectId = decoded.id;
  // temukan data nya berdasarkan object id
  const findDataByObjectId = await modelRunData.find({ profile: getObjectId });

  //kirimkan ke front end
  res.json(findDataByObjectId);
});

module.exports = router;
