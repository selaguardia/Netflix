const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB Connection is successful!`))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log(`Backend server is running!!!`);
});
