// halaman untuk routing login dengan fungsinya
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userData = require("../model/user");

router.post("/login-user-generate-token", async (req, res) => {
  try {
    const { email, password } = req.body;
    // gunakan fungsi compare bcrypt dengan yang ada di database
    const user = await userData.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "anda salah memasukkan nama email" });
    }

    // validasi password
    const validatedPassword = bcrypt.compare(password, user.password);
    if (!validatedPassword) {
      return res
        .status(401)
        .json({ message: "Password yang anda masukkan salah" });
    }

    // jika semanya benar maka masukkan buat token dan konfirmasi token ke dalam local storage
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "IaslPSkd129423",
      { expiresIn: "2h" }
    );

    // respon sukses dan kirim token ke front end
    res.status(200).json({
      message: "Berhasil melakukan login dan verifikasi",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(`Something when Error: ${error}`);
  }
});

// mendapatkan nama user
router.get("/get-user-username", async (req, res) => {
  const token = req.header("Authorization");
  const decoded = jwt.verify(token, "IaslPSkd129423");
  const objectId = decoded.id;

  const findUserByID = await userData.findById(objectId);

  res.json(findUserByID);
});

module.exports = router;
