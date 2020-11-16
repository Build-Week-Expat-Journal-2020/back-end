const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("./auth-model");
const { validateRequest } = require("./auth-middleware");
const generateToken = require("./generateToken");

router.post("/register", validateRequest, async (req, res, next) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
  try {
    const user = await Users.findByUsername(username);
    if (user) {
      return res.status(409).json({ message: "username already taken" });
    }
    const newUser = await Users.add({ username, password: hash });
    const token = generateToken(newUser);
    res.status(201).json({ id: newUser.id, username: newUser.username, token });
  } catch (err) {
    next(err);
  }
});

router.post("/login", validateRequest, async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findByUsername(username);
    if (!user) {
      return res.status(401).json({ message: "username does not exist" });
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res
        .status(401)
        .json({ message: "username or password is incorrect" });
    }

    const token = generateToken(user);
    res.json({ id: user.id, username: user.username, token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
