//constructor call hota h ek new keyword ke karn 

function user (username , roll , salary){
    this.username = username ;
    this.roll = roll ; 
    this.salary = salary ;
  
    return (this);
 

}

const info = new user( "anurag" , 12 , 20000);
const info2 = new user( "ansh" , 15 , 20000);
console.log(info); 