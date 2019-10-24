const mongoose = require("mongoose");
const HOST = "mongodb://localhost/";
const DB_NAME = "factory";

mongoose.Promise = global.Promise;
mongoose.connect(HOST + DB_NAME, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

module.exports = class ServiceDB {
  static connect() {
    db.once("open", () => console.log("Connected to " + HOST + DB_NAME));
    db.on("error", error => console.log("Error : " + error));
  }
};
