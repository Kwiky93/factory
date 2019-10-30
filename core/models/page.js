const mongoose = require("mongoose");
const pageSchema = new mongoose.Schema({
  name: String,
  path: String
});

module.exports = mongoose.model("Page", pageSchema);
