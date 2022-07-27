// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("returns false if the shift value is equal to 0.", () => {
    const actual = caesar("", 0, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("returns false if the shift value is less than -25.", () => {
    const actual = caesar("", -25, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("returns false if the shift value is greater than 25.", () => {
    const actual = caesar("", 26, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("returns false if the shift value is not present.", () => {
    const actual = caesar("", undefined, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Capital letters can be ignored.", () => {
    const actual = caesar("This is a secret message!", 8, true);
    const expected = "bpqa qa i amkzmb umaaiom!";

    expect(actual).to.equal(expected);
  });
});
