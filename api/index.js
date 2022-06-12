const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
require("dotenv").config();

// Mongoose connection
main().catch((err) => console.log(err));
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(
      mongoose.connection.on("connected", () => {

        console.log(
          "\x1b[36m%s\x1b[0m",
          `[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`
        );
      })
    );
  } catch (error) {
    console.log("😥 \x1b[31m%s\x1b[0m", "MongoDB connection error 😥\n", error);
  }
}

app.listen(PORT, () => {
  console.log(`✅ Listening for client requests on Port ${PORT} ✅`);
});

