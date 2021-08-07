let funnyWords = require('funny-words');
 


let getFunnyWords=(word)=>{
  return   funnyWords(word);
 
}

console.log(getFunnyWords('kako je lepooo'));