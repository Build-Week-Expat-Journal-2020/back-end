const jwt = require("jsonwebtoken");
const Posts = require("./posts-model");

async function validatePostID(req, res, next) {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "no post with given id" });
    }
    req.post = post;
    next();
  } catch (err) {
    next(err);
  }
}

function restrict(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "log in or register to see posts" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "invalid token" });
    }
  });
  next();
}

module.exports = {
  validatePostID,
  restrict,
};
