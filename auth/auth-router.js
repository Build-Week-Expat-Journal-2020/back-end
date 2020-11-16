const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("./auth-model");
const { validateRequest } = require("./auth-middleware");
const generateToken = require("./generateToken");

router.post("/register", validateRequest, async (req, res, next) => {
  const { username, password } = req.body;
  console.log("9");
  const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
  console.log('11');
  try {
    const user = await Users.findByUsername(username);
    console.log("14");
    if (user) {
      console.log("16");
      return res.status(409).json({ message: "username already taken" });
    }
    console.log("19");
    const newUser = await Users.add({ username, password: hash });
    console.log(newUser);
    const token = generateToken(newUser);
    res.status(201).json({ id: newUser.id, username: newUser.username, token });
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
    res.json({ id: user.id, username: user.username, token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
