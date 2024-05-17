const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

const connectMongo = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { host } = db.connection;

    console.log(`Conexión realizada a la base de datos con el host ${host}`);
  } catch (error) {
    console.log(`Ha habido un error al conectar con la base de datos`, error);
  }
};

module.exports = { connectMongo };
