const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config()

exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  
  if (!token) {
    res.status(401).json({ error: "Acceso al recurso denegado" });
    return;
  }
  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verified;
    console.log(verified);
    next();
  } catch (error) {
    res.status(400).json({ error: "El token es invalido", mensaje: error });
  }
};