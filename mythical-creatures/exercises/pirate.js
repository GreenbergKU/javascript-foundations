//expecting {} to be a function
//expecting () to be a constructor
class Pirate {
    constructor(name, job) {
        // expecting undefined to = 'Blackbeard'.
        this.name = name;
        //this.job = job;
        // expecting undefined to equal 'Scallywag'
        this.job = job || "Scallywag";
        // expecting undefined to equal job. (passed)
        // expecting undefined to be false
        this.cursed = false;
        this.acts
        //expecting undefined to equal true.

    }
    commitHeinousAct() {
        this.acts++
        this.cursed = this.acts>2
    (false) > true          }
    

    Pirate.prototype.commitHeinousAct = 
    function() {
        this.acts++
        this.cursed = this.acts> 2;    
       
       
        // commitHeinousAct <= 3) {
        //     this.cursed = false;
        // } else {
        //     this.cursed = true;
        // }
    }
    // expecting false to equal true.


} 
module.exports = Pirate;


/* "npm test mythical-creatures/test/pirate-test.js" */