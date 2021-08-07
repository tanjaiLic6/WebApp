let oneLinerJoke = require('one-liner-joke');



let randomJoke= (tag)=>{
  let getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag(tag);
  return getRandomJokeWithTag
}

let j1=randomJoke('intelligence');

console.log(j1)