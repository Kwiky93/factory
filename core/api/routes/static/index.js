module.exports = function(app) {
  app.get("/", async (req, res) => {
    const result = { status: 200, data: "home" };
    res.status(result.status).send(result.data);
  });
};
