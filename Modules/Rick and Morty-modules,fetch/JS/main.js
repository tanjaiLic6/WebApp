import  {chars}  from './constructors.js'
import { makeGridsOfCharacters} from './build-elements.js'


export let getCharacters= ()=>{
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
        // console.log(chars)
      
    })

    .then((c)=>{
      let divs=document.querySelectorAll('.col');
     
    let getDetails=(e)=>{
           
       var  idChar=e.currentTarget.id;
       
     localStorage.setItem('id',idChar);
      
     window.location.href='./details.html';

       return idChar
     }

   
     for(let i=0; i<divs.length; i++){
         divs[i].addEventListener('click',getDetails)
     }
     
     
    })

}

getCharacters();






