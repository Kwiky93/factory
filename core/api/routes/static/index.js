const utils = require("../../../services/utils");
module.exports = app => {
  let url = "/";
  app.get(url, async (req, res) => {
    const result = { status: 200, data: "home" };
    utils.log("GET : " + url);
    res.status(result.status).send(result.data);
  });
};
