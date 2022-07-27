// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let result = "";
    if (shift === 0) {
      return false;
    }
    if (shift === undefined) {
      return false;
    }
    if (shift < -24) {
      return false;
    }
    if (shift > 25) {
      return false;
    }
    if (!encode) {
      shift *= -1;
    }
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      let charCode = input.charCodeAt(i);
      if (charCode < 97 || charCode > 123) {
        result += String.fromCharCode(charCode);
        continue;
      }
      charCode += shift;
      if (charCode < 97) {
        charCode += 26;
      }
      if (charCode > 122) {
        charCode -= 26;
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
