const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { validationPassword, validationEmail } = require("../../utils/validate");

const userSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  name: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  direction: { type: String, trim: true, required: true },
  roleProtector: { type: Boolean },
  nifNie: { type: String, trim: true, required: true },
});

userSchema.pre("save", function (next) {
  if (!validationPassword(this.password)) {
    return next(
      setError(
        "404",
        "Ups... Parece que la contraseña no cumple con todos los requisitos, ¡prueba una contraseña diferente!"
      )
    );
  }

  if (!validationEmail(this.email)) {
    return next(
      setError(
        "404",
        "¡Vaya! Parece que este correo electrónico no es válido. ¿Podrías revisarlo e intentarlo de nuevo?"
      )
    );
  }

  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
