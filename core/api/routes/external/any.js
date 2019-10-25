module.exports = function(app) {
  app.get("/get/any", async (req, res) => {
    const result = { status: 200, data: "any" };
    res.status(result.status).send(result.data);
  });
};
