const App = require("./controllers/app");

function run() {
  App.run();
  let app = new App("App");
  //  console.log(app.getParams());
}

run();
