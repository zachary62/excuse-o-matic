const test = require("node:test");
const assert = require("node:assert");
const { getExcuse } = require("./excuse.js");

test("returns the first excuse", () => {
  assert.strictEqual(getExcuse(0), "My cat ate my internet.");
});
