var assert = require("assert");

describe("Проверка чего либо", function() {
  it("Test #1", function(done) {
    let err = false;
    if (err) {
      assert(false, err.message);
      return;
    }
    done();
  });
});
