const express = require("express");
const server = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router");
const postsRouter = require("../posts/posts-router");
const { restrict } = require("../posts/posts-middleware");

server.use(morgan("dev"));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/auth", authRouter);
server.use("/posts", restrict, postsRouter); 

server.get("/", (req, res) => {
  res.json({ api: "up" });
});
server.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});
server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = server;
