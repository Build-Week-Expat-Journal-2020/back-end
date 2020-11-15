const router = require("express").Router();
const Posts = require("./posts-model");
const { validatePostID, validateRequest, validateUser } = require("./posts-middleware");

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

router.get("/users/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Posts.findUser(id);
    if (!user) {
      return res.status(404).json({ message: "no user found with given id" });
    }

    const userPosts = await Posts.findAllByUser(id);
    if (!userPosts.length) {
      return res
        .status(404)
        .json({ message: "this user has not made any posts" });
    }
    res.json(userPosts);
  } catch (err) {
    next(err);
  }
});

router.post("/", validateRequest, async (req, res, next) => {
  const { user_id } = req.body;
  try {
    const user = await Posts.findUser(user_id);
    if (!user) {
      return res.status(400).json({ message: "invalid user ID for post" });
    }
    const post = await Posts.add(req.body);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", validatePostID, validateRequest, validateUser, async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await Posts.update(req.body, id);
    res.json(post);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', validatePostID, validateUser, async (req, res, next) => {
  const { id } = req.params;
  try {
    await Posts.remove(id);
    res.json({ message: 'post was removed' })
  } catch (err) {
    next(err);
  }
})

module.exports = router;
