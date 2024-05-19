const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  const secret = req.app.get("secretKey") || process.env.JWT_SECRET;

  if (!authorization) {
    return res.status(401).json({
      message: "No autorizado",
    });
  }

  const splits = authorization.split(" ");
  if (splits.length !== 2 || splits[0] !== "Bearer") {
    return res.status(400).json({
      message: "Solicitud incorrecta",
    });
  }

  const jwtString = splits[1];

  try {
    var token = jwt.verify(jwtString, secret);
  } catch (error) {
    return next(error);
  }

  const authority = {
    id: token.id,
    name: token.name,
  };
  req.authority = authority;

  next();
};

module.exports = {
  isAuth,
};
