//expecting {} is not a function
//expecting undefined to equal 'Jhun'.

class Wizard {
     constructor({name, bearded}) {
         this.name = name;
         //expecting undefined to equal true.
         //expecting true to equal false
         this.bearded = bearded !== undefined ? bearded : true; 
         this.isRested = true;
         this.spells = 0;   
    // }
    constructor(wiz) {
        this.name = wiz.name;
        //expecting undefined to equal true.
        //expecting true to equal false
        this.bearded = wiz.bearded !== undefined ? wiz.bearded : true; 
        this.isRested = true;
        this.spells = 0;   
    }
    //expecting undefined to equal defined
    incantation(chownLumos) {
        return chownLumos.toUpperCase()  
    }
    //expecting "Expecto Patronum" to equal "EXPECTO PATRONUM", identical to above also expecting to pass
    incantation(ExpectoPatronum) {
        return ExpectoPatronum.toUpperCase()
    }
    //expecting "magic bullet" to equal "MAGIC BULLET", identical to above also expecting to pass
    incantation(magicBullet) {
        return magicBullet.toUpperCase()
    }
    cast() {
        if (this.spells < 3) {
            this.isRested = true;  
            this.spells = this.spells + 1;
        } else {
            this.isRested = false;
            console.log(this.isRested)
            return 'I SHALL NOT CAST!'
        }
    }
}         

        
    
    //('chown lumos') {
    //     return 'CHOWN LUMOS'.toUpperCase();}
module.exports = Wizard;


/* "npm test mythical-creatures/test/wizard-test.js" */

//speak out loud more
//know your syntax
//develop habbitual use of this system
//  -don't rush, breathe, avoid panic, ignore clock
//  -read the test
//  -predict expected
//  -fail the test
//  -read the error: utilize the info 
//    ** look at the line the error points to **
//  -pseudocode 
//  -write code to make test pass
//read carefully, don't rush, miss details
//get over your nervousness
//get out of your head
//better prepare