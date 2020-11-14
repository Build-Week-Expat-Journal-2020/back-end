const jwt = require("jsonwebtoken");

module.exports = user => {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "1h",
  };
  const secret = process.env.JWT_SECRECT;
  jwt.sign(payload, secret, options);
};
