require("dotenv").config();
const utils = require("./utils");
let express = require("express");
const history = require("connect-history-api-fallback");
let WebSocket = new require("ws");

const httpPort = process.env.WEB_SERVER_PORT;
const WSPort = process.env.WS_PORT;
const filePath = "./dist";

let clients = {};
let app = express();

let wss = new WebSocket.Server({ port: WSPort });

module.exports = class WebService {
  static async start() {
    wss.on("connection", function(ws) {
      let id = Math.random();
      clients[id] = ws;
      utils.log("новое соединение " + id);

      ws.on("message", function(message) {
        utils.log("получено сообщение " + message);

        for (let key in clients) {
          clients[key].send(message);
        }
      });

      ws.on("close", function() {
        utils.log("соединение закрыто " + id);
        delete clients[id];
      });
    });

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
