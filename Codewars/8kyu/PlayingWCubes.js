/**class Cube {
  
  constructor(side){
    this.side = Math.abs(side) || 0;
  }
  
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
} */

//refactor
class Cube {
    constructor(side) {
      this.setSide(side)
    }
  
    getSide() {
      return this.side
    }
    
    setSide(side = 0) {
      this.side = Math.abs(side)
    }
  }