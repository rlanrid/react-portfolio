const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5050;
const config = require("./config/key.js");

app.listen(port, () => {
    mongoose
        .connect(config.mongoURI)
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err)
        })
})