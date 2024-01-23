const form = document.querySelector('form');
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();
// parseInt es lea use kya kyu ke hmari value  point ma na aya ....
    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

if(height === ''|| height < 0||isNaN(height) ){
results.innerHTML= `please give a valid height ${height}`;
}

else if(weight === ''|| weight < 0||isNaN(weight) ){
  results.innerHTML= `please give a valid weight ${weight}`;
  }
  else{
   const bmi= (weight/((height*height)/10000)).toFixed(2)
    // results.innerHTML=`<span>${bmi}</spam>`;
  
 if(bmi<18.6){
  results.innerHTML=`<span>under weight ${bmi}</spam> `;
 }
 if(bmi>=18.6||bmi<=24.9){
  results.innerHTML=`<span>normal range ${bmi}</spam>`;
 }
 if(bmi>24.9){
  results.innerHTML=`<span>overweight ${bmi}</spam>`;
 }
}
}
);
