const express = require("express");
const { connectMongo } = require("./src/utils/db");
const dotenv = require("dotenv");
const userRouter = require("./src/api/user/user.router");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
connectMongo();

// --- Crear endpoints ---

// Rutas del Endpoint
app.get("/", (req, res) => {
  res.json({ message: "¡El servidor funciona!" });
});

// -----------------------------
// MULTER --- OPCIONAL
// app.post("/images/single", upload.single("imagePerfil"), (req, res) => {
//   console.log(req.file);

//   res.send("Imagen subida");
// });
// -----------------------------

// -- Rutas --
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`El servidor se ha iniciado en el puerto: ${PORT}`);
});
