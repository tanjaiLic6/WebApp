
let body=document.querySelector('body');
let button=document.querySelector('button');
let div=document.querySelector('div');
const requestUrl = 'https://api.chucknorris.io/jokes/random';


let getJoke= ()=>{ 
fetch(requestUrl)

.then(function (response) {
  
return response.json();


})

.then(function (myJson) {
div.textContent='';
let p=document.createElement('p');
p.textContent=myJson.value;
div.append(p);
body.append(div)

});}


button.addEventListener('click',getJoke);