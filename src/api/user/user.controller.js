const User = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res
        .status(400)
        .json({ message: "El email que has introducido ya está en uso." });
    }
    const userDB = await new User(req.body).save();
    return res.status(201).json({
      message: `El usuario ${userDB.email} ha sido creado`,
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ email: req.body.email });
    if (!userInfo) {
      return res
        .status(400)
        .json({ message: "Las credenciales no son válidas" });
    }
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      userInfo.password = "*************";
      const token = jwt.sign(
        {
          id: userInfo._id,
          email: userInfo.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30m" }
      );

      return res.status(200).json({
        message: "Sesión iniciada, ¡bienvenido!",
        user: userInfo,
        token: token,
      });
    } else {
      return res
        .status(400)
        .json({ message: "Las credenciales no son válidas" });
    }
  } catch (error) {
    return next(error);
  }
};

const logout = (req, res, next) => {
  try {
    // Realiza las acciones necesarias para cerrar la sesión, como invalidar el token, etc.
    return res.status(200).json({ message: "Sesión cerrada con éxito" });
  } catch (error) {
    return next(error);
  }
};

module.exports = { register, login, logout };
