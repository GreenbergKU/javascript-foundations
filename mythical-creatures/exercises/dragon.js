// expected {} to be a function 
// expect () to be a conductor
class Dragon {
    constructor(name, rider, color) {
        // expecting undefined to = "Jeff".
        this.name = name;
        // expecting undefined to = 'Eragon'.
        this.rider = rider;
        // expecting undefined to = 'blue'.
        this.color = color;
        // expecting hungry(undefined) to = true.
        this.hungry = true;

    }
    eat() {
        //expecting true to equal false.
        //expecting (this.hungry) true = false
        this.hungry = false;
    }  
} 





module.exports = Dragon;


/* "npm test mythical-creatures/test/dragon-test.js" */