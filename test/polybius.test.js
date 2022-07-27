// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("Should return a string with the decoded value", () => {
    const actual = polybius("thinkful");
    const expected = "4432423352125413";

    expect(actual).to.equal(expected);
  });

  it("When encoding, it translates the letters i to 42", () => {
    const actual = polybius("i");
    const expected = "42";

    expect(actual).to.equal(expected);
  });
  it("When encoding, it translates the letters j to 42", () => {
    const actual = polybius("j");
    const expected = "42";

    expect(actual).to.equal(expected);
  });
  it("When decoding, it translates 42 to i", () => {
    const actual = polybius("i");
    const expected = "42";
    expect(actual).to.equal(expected);
  });
  it("When decoding, it translates 42 to j", () => {
    const actual = polybius("j");
    const expected = "42";
    expect(actual).to.equal(expected);
  });
});
