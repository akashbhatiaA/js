/*const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// esma hm event use kra ga
// esma  jb be event pr click krta ha tb us event ko function ma la sakta ha or uska sat kush activity kr sakta ha...
buttons.forEach(function(button){
  console.log(button);
  buttons.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor=e.target.id;
    }
  });
})*/
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// esma hm event use kra ga
// esma  jb be event pr click krta ha tb us event ko function ma la sakta ha or uska sat kush activity kr sakta ha...
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target .id=== 'yellow') {
      body.style.backgroundColor = e.targ.idid;
    }
    
  });
});