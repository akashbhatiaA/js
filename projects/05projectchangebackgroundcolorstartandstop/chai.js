// generate a random color


const randomColor =function(){
    const hex ="0123456789ABCDEF"
    let color ="#"
    for(let i=0 ; i<6 ; i++){
       // color +=hex[Math.floor(Math.random()*16)];
       color +=hex[parseInt(Math.random()*16)];
    }
    return color;
};

let start = 0;
 
    
    document.querySelector("#start").addEventListener('click',function(){
        if(!start){
     start =  setInterval(() => {
        document.body.style.backgroundColor = randomColor();
     }, 3000); 
       
       
    }});

document.querySelector('#stop').addEventListener('click',function(){
   clearInterval(start);
   start = null;
   console.log("stopped");
   
});