module.exports = app => {
  require("./routes/static")(app);
  require("./routes/external/any")(app);
};
