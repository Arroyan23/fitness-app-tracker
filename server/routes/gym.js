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
router.get("/get-priv-data", async (req, res) => {
  const token = req.header("Authorization");
  const decoded = jwt.verify(token, "IaslPSkd129423");
  const objectId = decoded.id;

  const findDataById = await userGymUnique.find({ profile: objectId });

  // kirimkan ke front end
  res.json(findDataById);
});

// fungsi untuk menghapus data berdasarkan id yang di temukan
router.delete("/delete-id/:id", async (req, res) => {
  // mengambil id berdasarkan params
  try {
    const id = req.params.id;
    const deleteData = await userGymUnique.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Berhasil menghapus data dengan konfigurasi back end" });
  } catch (error) {
    console.log(`Ada yang salah pada konfirmasi ke dalam back end: \n${error}`);
  }
});

module.exports = router;
