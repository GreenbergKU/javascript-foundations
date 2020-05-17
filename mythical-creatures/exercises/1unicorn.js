// *********  npm test mythical-creatures/test/unicorn-test.js  **********


class Unicorn {
  constructor(name, color) {
    this.name = name;
    console.log(name);

    this.color = color;
    console.log(color);

    // DEFAULT implies a need for "IF/ELSE CONDITIONAL" w/ "STRICT EQAUL" statement
    // ARGUMENTS follow AFTER the CONDITIONAL, w/ "THIS" and "=" (assignment operator)
    if (color === undefined) {
      this.color = "white"; 
    } else {
      this.color = color;
    };
    // can type in <"it.only" in place of "skip" to TEST THAT TEST ONLY!, w/ others UNSKIPPED!
  }
  
  isWhite() {
    console.log(this);
      // ERROR CODE is a BIG HINT: "unicorn.isWhite is not a function"
      // if NOT a function, has to be a METHOD (a function inside an object or class)
      // METHODS can pass through the constructor, so 'this' is the ARGUMENT
      // console.log('this') should match "object instance" or Unicorn "Steve"
    if (this.color !== "white") {
      return false;
    }
  } 
    says(message) {
      return `**;* ${message} *;**`;
    }
  
} 
  

module.exports = Unicorn;

//////******* npm test mythical-creatures/test/unicorn-test.js ******//////

// BEFORE you (BEGIN)...
// 1: READ through the test
// 2: ASK yourself, will it FAIL? why? or how?
// 3: VERBALIZE your steps, emphasis on SYMANTICS, explain LOGIC
// 3: RUN the test!
// 4: PASS the test, or MAKE it PASS! 
 