const express = require("express");
const cors = require("cors"); // cors 허용
const authRoutes = require("./router/auth"); // 라우터 이용

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth/", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
