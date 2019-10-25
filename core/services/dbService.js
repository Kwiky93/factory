require("dotenv").config();
const mongoose = require("mongoose");
const utils = require("./utils");
const HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

mongoose.Promise = global.Promise;
mongoose.connect(HOST + DB_NAME, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

module.exports = class ServiceDB {
  static connect() {
    db.once("open", () => utils.log("DB доступна, " + HOST + DB_NAME));
    db.on("error", error => utils.log("Ошибка : " + error));
  }
};
