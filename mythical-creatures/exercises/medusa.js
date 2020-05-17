var Person = require('../exercises/person');

class Medusa {
    constructor(name){
        this.name = name;
        this.statues = [];
        
    }
    stare(victim) {
        victim.stoned = true
        this.statues.push(victim)
        //victim.stoned = true
        if (this.statues.length > 3){
            console.log('before', this.statues)
            this.statues[0].stoned = false
            console.log('after', this.statues)
            this.statues.shift()  
            
        }

    }
    
}



module.exports = Medusa;
// npm test mythical-creatures/test/medusa-test.js