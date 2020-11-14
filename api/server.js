const express = require("express");
const server = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require('cors');

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = server;