// halaman untuk router registrasi akun dan juga kode otp dan sebagainya
const express = require("express");
const router = express.Router();
const userData = require("../model/user");
const bcrypt = require("bcrypt");

router.post("/login-debug-console", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // cek keunikan email dan username
    const existingEmail = await userData.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email Sudah Digunakan" });
    }

    // encrypt password yang tersedia
    const hashedPassword = await bcrypt.hash(password, 10);

    const newDataUser = new userData({
      username,
      email,
      password: hashedPassword,
    });
    await newDataUser.save();

    res.status(200).json({ message: "Berhasil di masukkan ke dalam database" });
  } catch (error) {
    console.log(`Something when error: ${error}`);
  }
});

module.exports = router;
