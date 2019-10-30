const Page = require("./page");
module.exports = class PageList {
  static getPages() {
    return Page.find({});
  }
  static savePage(name, path) {
    let page = new Page({ name, path });
    page.save();
  }
  static getMenu() {
    return Page.find({}).select("-_id name path");
  }
};
