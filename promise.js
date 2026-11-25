 const promiseone = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("async task is complete")
        resolve()
    } , 1000)
 })

  promiseone.then(function(){
    console.log("promise consumed")
  })


// promise2


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async 2 complete")
    },1000)
    resolve()
}).then(function(){
    console.log(" async resolved ")
})



// task3 


const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai" , email : "chai.com"})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
})

// task 4 


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false ;
        if(!error){
         resolve ({ username: "anurag" , email: "anurag@gmail"})
        }else {
            reject('ERROR : somthing went wrong')
        }
    },1000)
})
 promisefour.then(function(user){
    console.log(user);
     return user.username 
 }).then(function(username){
    console.log(username)
 }).catch(function(error){
    console.log("error")
 }).finally(function(){
    console.log(" the promise is eitheir resolved or  rejected ")
 })


 // task 5 

 const Promisefive = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = false
        if(!error ){
            resolve({palce : 'simbholi' , roll : '10'})
        }else{
            reject('ERROR : SOMTHING went wrong')
        }
     },1000)
 })
 async function consumePromise(){
    try{
         const response = await Promisefive  // this is object thats why  it store in response
         console.log(response);
    }
 catch (error){
    console.log(error)
 }
}
 consumePromise()   