const utils = require("./utils");
require("dotenv").config();

const http = require("http");
const fs = require("fs");
const httpPort = process.env.WEB_SERVER_PORT;

module.exports = class WebService {
  static async start() {
    http
      .createServer((req, res) => {
        fs.readFile("./dist/index.html", "utf-8", (err, content) => {
          if (err) {
            utils.log(err);
          }

          res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
          });
          res.end(content);
        });
      })
      .listen(httpPort, () => {
        utils.log("WEB запущен, порт: " + httpPort);
      });
  }
};
