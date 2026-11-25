const heros = [ "thor" , "ironman"]

const herospower = {
    thor  : "hammer" ,
    spiderman : "spiky"
}

Object.prototype.anurag=function(){          // object me anurag define kiya h jis wajah se heros aur herospower bhi usse use karr sakte  ha 
       console.log("anurag is superman ")
}

herospower.anurag()


Array.prototype.myanurag = function(){
    console.log("harr nahi manuga ")
}

heros.myanurag();      // ye to  use kar lega kyuki ye array h but object nahi karr payenge 
// herospower.myanurag();   // jasa ye 