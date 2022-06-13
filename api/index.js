const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
require("dotenv").config();

// Mongoose connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("\x1b[36m%s\x1b[0m", `[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`);
});

mongoose.connection.on("error", (error) => {
  console.log("\x1b[31m%s\x1b[0m", "MongoDB connection error 😥\n", error);
});

mongoose.connection.on("disconnected", () =>
  console.log("\x1b[33m%s\x1b[0m", "MongoDB disconnected  ⚡️ 🔌 ⚡️")
);

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(PORT, () => {
  console.log(`✅ Listening for client requests on Port ${PORT} ✅`);
});
