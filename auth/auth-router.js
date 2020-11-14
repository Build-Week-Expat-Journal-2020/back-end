const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./auth-model");
const { validateRequest } = require("./auth-middleware");
const generateToken = require("./generateToken");

router.post("/register", validateRequest, async (req, res, next) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, process.env.BCRYPT_ROUNDS);
  try {
    const user = await Users.findByUsername(username);
    if (user) {
      return res.status(409).json({ message: "username already taken" });
    }
    const newUser = await Users.add({ username, password: hash });
    const token = generateToken(newUser);
    res.status(201).json({ user, token });
  } catch (err) {
    console.log(err);
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
    res.json({ user, token })
  } catch(err) {
    next(err);
  }
});
