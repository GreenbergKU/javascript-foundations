class Unicorn {
    constructor(name, color) {
      this.name = name;
      console.log(name);
  
      this.color = color;
      console.log(color);
      if (color === undefined) {
        this.color = "white"; 
      } else {
        this.color = color;
      };
    }
    isWhite() {
        console.log(this);
        if (this.color !== "white") {
            return false;
        }
    } 
    says('Batman has a great smile') {
            return '**;* ${message} *;**`
    }
        
} 

module.exports = Unicorn;
