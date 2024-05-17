const user = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const userExist = await User.findOne({ email: user.email });
    if (userExist) {
      return new Error("El email que has introducido ya está en uso.");
    }
    const userDB = await user.save();
    return res.json({
      status: 201,
      message: `El usuario ${userDB.email} ha sido creado`,
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ email: req.body.email });
    console.log(bcrypt.compareSync(req.body.password, userInfo.password));
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
        data: { message: "ok", user: userInfo, token: token },
      });
    } else {
      return res.json({
        status: 400,
        message: "Las credenciales no son válidas",
        data: null,
      });
    }
  } catch (error) {
    return next(error);
  }
};

const logout = (req, res, next) => {
  try {
    const token = null;
    return rex.status(200).json({
      status: 200,
      message: "Sesión cerrada con éxito",
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { register, login, logout };
