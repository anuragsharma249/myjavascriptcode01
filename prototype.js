function createuser(username, score){
    this.username = username
    this.score = score 
}

  createuser.prototype.increment = function(){
    this.score++;
  }
  createuser.prototype.printme = function(){
        console.log(`price of chai ${this.score}`)
  }
  const chai = new createuser("chai" , 20)
  const tea = new createuser("tea" , 25)

  chai.printme();
