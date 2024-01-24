const promiseOne = new Promise(function(resolve, reject){
    //do an  asyn task
    //database calls.cryptography,network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})// time ->>5:47:00
promiseOne.then(function() {
       console.log("promise consumed")    
});

// eska ek or method ha 


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2"); 
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})
 ////


 const promiseThree =new  Promise(function(resolve,reject){
    setTimeout(function(){
           resolve({username:"chai ", email:"chai@example.com"})
    },1000)
 })


 promiseThree.then(function(akash){
         console.log(akash);
 });



 ////


 const promiseFour = new Promise(function(resolve,reject){
            setTimeout(function(){
                let error= true
                if(!error){
                    resolve({username :"akash", password :"123"})
                }else{
                    reject('ERROR:somethig went wrong')
                }
            },1000)
            })

 promiseFour
 .then((user)=> {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error)
})
.finally(()=>console.log("finally"))
////



 const promiseFive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({user:"hitesh", password:"123"})
        } else{
            reject("ERROR:Something went wrong")
        }
    },1000)
 })


 async function consumePromiseFive(){
    try{
        const response = await promiseFive 
        console.log(response);
    }catch(error){
        console.log(error)
    }
 }
 consumePromiseFive()

 ////


// async function getAllUsers(){
//     try{// await meaning jaldi fetch krna ka treka ...
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
//      const data = await response.json() // await reponse jaldi connect kr da ga json sa 
//      console.log(data);
// }
// catch(error){
//     console.log("E:",error);
// }
// }
// getAllUsers()




////\

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))






