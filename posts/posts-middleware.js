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
    req.token = decoded;
  });
  next();
}

function validateRequest(req, res, next) {
  const { photo, user_id } = req.body;
  if (!photo || typeof photo !== "string") {
    return res
      .status(400)
      .json({ message: "please provide a photo for the post" });
  }
  if (!user_id || typeof user_id !== "number") {
    return res
      .status(400)
      .json({ message: "please provide a user ID for the post" });
  }
  next();
}

async function validateUser(req, res, next) {
  const { username } = req.token;
  const { id } = req.params;
  try {
    const post = await Posts.findById(id);
    if (post.posted_by !== username) {
      return res.status(400).json({ message: "cannot update other users' posts" });
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  validatePostID,
  restrict,
  validateRequest,
  validateUser,
};
