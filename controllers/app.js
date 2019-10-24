const db = require("../services/dbService");
module.exports = class App {
  constructor(params) {
    this.params = params;
  }

  static async run() {
    db.connect();
  }
  getParams() {
    return this.params;
  }
};
