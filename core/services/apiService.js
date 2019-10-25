const express = require("express");
const utils = require("./utils");
const app = express();
const HOST_FRONT = "http://localhost:8080";
const SERVER_PORT = 8080;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", HOST_FRONT);
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
