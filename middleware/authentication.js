const { User, Token, Sequelize } = require("../models");
const { Op } = Sequelize;
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, jwt_secret);
    const user = await User.findByPk(payload.id);
    const tokenFound = await Token.findOne({
      where: {
        [Op.and]: [{ UserId: user.id }, { token: token }],
      },
    });

    if (!tokenFound) {
      return res.status(401).send({ message: "Unauthorized token" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error, message: "Invalid token" });
  }
};

const isAdmin = async (req, res, next) => {
  const admins = ["admin", "superadmin"];
  if (!admins.includes(req.user.role)) {
    return res.status(403).send({
      message: "You do not have Admin access",
    });
  }
  next();
};

const isSuperAdmin = async (req, res, next) => {
  const admins = ["superadmin"];
  if (!admins.includes(req.user.role)) {
    return res.status(403).send({
      message: "You do not have SuperAdmin access",
    });
  }
  next();
};

module.exports = { authentication, isAdmin, isSuperAdmin };
