const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB Connection is successful!`))
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log(`Backend server is running!!!`);
});