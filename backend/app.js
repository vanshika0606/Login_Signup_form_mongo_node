const express = require("express");
const app = express();

const user = require("./route.js")

app.use(express.json());


app.use("/", user)



module.exports = app;