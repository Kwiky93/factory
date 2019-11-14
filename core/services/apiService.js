const express = require("express");
const utils = require("./utils");
const app = express();
require("dotenv").config();
const HOST = process.env.HOST;
const WEB_SERVER_PORT = process.env.WEB_SERVER_PORT;
const SERVER_PORT = process.env.SERVER_PORT;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", HOST + ":" + WEB_SERVER_PORT);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

module.exports = class ServiceDB {
  static async start() {
    await require("../api")(app);

    await app.listen(SERVER_PORT, () => {
      utils.log("API запущен, порт: " + SERVER_PORT);
    });
  }
};
