const express = require("express");
const { connectMongo } = require("./src/utils/db");
const dotenv = require("dotenv");
const userRouter = require("./src/api/user/user.router");
const animalRouter = require("./src/api/animal/animal.router");
const adoptionRouter = require("./src/api/adoption/adoption.router");

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
connectMongo();

// Rutas
app.use("/user", userRouter);
app.use("/animal", animalRouter);
app.use("/adoptions", adoptionRouter);

app.listen(PORT, () => {
  console.log(`El servidor se ha iniciado en el puerto: ${PORT}`);
});
