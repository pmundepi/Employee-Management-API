"use strict";
const mongoose = require("mongoose");
const config = require("./config");

mongoose
    .connect(config.dbUrl)
    .then(() => console.log("connected to MongoDb"))
    .catch((err) => console.log("error is : ", err));

module.exports = mongoose;