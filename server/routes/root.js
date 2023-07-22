const express = require('express')
const train = require("./api/train")

const app = express.Router();

app.use("/api/train", train)

module.exports = app;