// halaman untuk menjalankan server
const express = require("express");

// untuk menyimpan data server
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`App is Listening on port http://localhost:${port}`);
});
