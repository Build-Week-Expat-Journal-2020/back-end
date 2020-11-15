const router = require("express").Router();
const Posts = require("./posts-model");
const { validatePostID } = require("./posts-middleware");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Posts.find();
    if (!posts.length) {
      return res.status(404).json({ message: "no posts found" });
    }
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", validatePostID, (req, res) => {
  res.json(req.post);
});

router.get("/:user_id", async (req, res, next) => {
  const user_id = req.params.user_id;
  try {
    const user = await Posts.findUser(user_id);
    if (!user) {
      return res.status(404).json({ message: "no user found with given id" });
    }

    const userPosts = await Posts.findAllByUser(user_id);
    if (!userPosts.length) {
      return res
        .status(204)
        .json({ message: "this user has not made any posts" });
    }
    res.json(userPosts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;