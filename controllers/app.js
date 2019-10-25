const db = require("../services/dbService");
const api = require("../services/apiService");
module.exports = class App {
  constructor(params) {
    this.params = params;
  }

  static async run() {
    db.connect();
    api.start();
  }
  getParams() {
    return this.params;
  }
};
