const db = require("./services/dbService");
const api = require("./services/apiService");
const web = require("./services/webService");
module.exports = class App {
  constructor(params) {
    this.params = params;
  }

  static async run() {
    db.connect();
    api.start();
    web.start();
  }
  getParams() {
    return this.params;
  }
};
