//var assert = require('chai').assert;
//var Vampire = require('../exercises/vampire');
//var Mythical_creature ***MUST BE CAPITOLIZED!!!*****

class Vampire {
    constructor(name, pet) {
        this.name = name;
        // if (this.pet === undefined) {
        //     this.pet = "bat";
        // } else {
        //     this.pet = pet;
        // } 
        this.pet = pet || "bat";
        this.thirsty = true;
          
    }
    drink() {
        //expect drink() to return true = false
        console.log(this);
        this.thirsty = false;
    }   
}





module.exports = Vampire;
//npm test mythical-creatures/test/unicorn-test.js