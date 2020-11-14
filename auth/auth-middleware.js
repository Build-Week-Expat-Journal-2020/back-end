function validateRequest(req, res, next) {
  const { username, password } = req.body;
  if (!username || typeof username !== "string") {
    return res.status(400).json({ message: "please provide a valid username" });
  }
  if (!password || typeof password !== "string") {
    return res.status(400).json({ message: "please provide a valid password" });
  }
  next();
}

module.exports = {
  validateRequest,
};
