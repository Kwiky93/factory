const utils = require("./utils");
require("dotenv").config();

const httpPort = process.env.WEB_SERVER_PORT;
const filePath = "./dist";
require("dotenv").config();

let express = require("express");
let app = express();
let history = require("connect-history-api-fallback");

module.exports = class WebService {
  static async start() {
    app.use(
      history({
        // verbose: true
      })
    );

    app.use(express.static(filePath));

    app.set("port", httpPort);

    app.listen(app.get("port"), () => {
      utils.log("WEB запущен, порт: " + httpPort);
    });
  }
};
