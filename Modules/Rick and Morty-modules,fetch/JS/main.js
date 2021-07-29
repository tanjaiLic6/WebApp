import  Character from './constructors.js'
import { makeGridsOfCharacters} from './build-elements.js'
  let chars= new Character();
  let row = document.querySelector('.row');

 let getCharacters= ()=>{
    const requestUrl = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20';

    fetch(requestUrl)
    
    .then( (response)=> {
    
    return response.json();
    
    })
    
    .then( (myData)=> {
      
        for (let i=0; i<myData.length; i++){
          
            chars.listOfChar.push(myData[i]);
      
            
        }

        makeGridsOfCharacters(chars)
        console.log(chars)
        
    
    })
    .then((chars)=>{
        let divs=document.querySelectorAll('.col');

        let getDetails=(e)=>{
           
           let idChar=e.currentTarget.id;
           console.dir(idChar)

           
          
        }

      
        for(let i=0; i<divs.length; i++){
            divs[i].addEventListener('click',getDetails)
        }

  
       
        // console.log(divs)
    })
    
    ;

    

}

getCharacters()





