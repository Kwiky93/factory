module.exports = app => {
  require("./routes/external/any")(app);
  require("./routes/web/pages")(app);
};
