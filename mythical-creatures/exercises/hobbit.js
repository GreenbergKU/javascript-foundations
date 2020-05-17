//expecting {} is not a function
//passed

class Hobbit {

constructor(name) {
    //expecting undefined to equal 'Bilbo'
    this.name = name;
    //expecting undefined to equal (homebody)
    this.disposition = "homebody";
    //expecting undefined to equal 0.
    this.age = 0;
    //expecting (undefined) to equal false
    this.adult = false;
    //expecting undefined to equal true
    this.isShort = true;
    this.old = false;
    //expecting true to equal false.
    this.hasRing = (name === "Frodo") || false;
    console.log(this.hasRing);
    console.log(name === "name");
    console.log(false);
}


celebrateBirthday() {
    //expecting 0 to equal 3.
    this.age++;
    //expecting undefined to equal true
    if (this.age > 32) {
        this.adult = true
        //console.log(this.age)
    };
    //expecting (undefined) to equal true
     //initially expected false to equal true?? wrong!!
    if (this.age > 100) {
        this.old = true
            //console.log(this.old)

    };
}


}




module.exports = Hobbit;
//Mythical_creature ***MUST BE CAPITOLIZED!!!*****

/*
npm test mythical-creatures/test/medusa-test.js
*/
