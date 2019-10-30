const utils = require("../../../services/utils");
module.exports = app => {
  app.get("/get/json", async (req, res) => {
    const result = { status: 200, data: { text: "text" } };
    utils.log("GET : " + "/get/json");
    res.status(result.status).send(result.data);
  });

  app.get("/get/navigation", async (req, res) => {
    const result = {
      status: 200,
      data: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "New", path: "/new" }
      ]
    };
    utils.log("GET : " + "/get/navigation");
    res.status(result.status).send(result.data);
  });
};
