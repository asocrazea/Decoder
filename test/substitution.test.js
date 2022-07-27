// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");
//const { expect } = require("chai"); const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long.", () => {
    const actual = substitution("", "$wae&zrdxtfcygvuhbijnokmp", true);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("It returns false if there are any duplicate characters in the given alphabet.", () => {
    const actual = substitution("", "abcdefghijkllnopqrstuvwxyz", true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  // it("It correctly translates the given phrase, based on the alphabet given to the function.", () => {
  //   const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl", true); //>
  //   const expected = "y&ii$r&";
  //   expect(actual).to.equal(expected);
  // });
  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const message = "message";
    const alphabet = "asdfasdfasdfasdfasdfasdfas";
    const actual = substitution(message, alphabet);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("It correctly translates the given phrase, based on the alphabet given to the function", () => {
    const input = "Hello";
    const alphabet = "mfyealvgczwpoutbxirnjskqdh";
    const actual = substitution(input, alphabet);
    const expected = "gappt";
    expect(actual).to.equal(expected);
  });

  it("It maintains spaces in the message, before and after encoding or decoding.", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev",
      true
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
  it("It ignores capital letters.", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev",
      true
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
});
