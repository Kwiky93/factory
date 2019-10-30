const utils = require("../../../services/utils");
const pageList = require("../../../models/pageList");
module.exports = app => {
  app.get("/get/json", async (req, res) => {
    const result = { status: 200, data: { text: "text" } };
    utils.log("GET : " + "/get/json");
    res.status(result.status).send(result.data);
  });

  app.get("/get/navigation", async (req, res) => {
    const result = {
      status: 200,
      data: await pageList.getMenu()
    };
    utils.log("GET : " + "/get/navigation");
    res.status(result.status).send(result.data);
  });
};
