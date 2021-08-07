let randomWords = require('random-words');

let getRandomWor=(howMany)=>{
  return  randomWords(howMany);
}

let r1=getRandomWor(6);

console.log(r1);