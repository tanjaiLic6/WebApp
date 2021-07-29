

export let makeGridsOfCharacters= (chars)=>{
    // console.log(chars)
    let numbOgGrids= chars.listOfChar.length;
    // console.log(numbOgGrids)
    let charList=chars.listOfChar;
    let row = document.querySelector('.row');
    for(let i=0; i<numbOgGrids; i++){
        //// declaration and setting classes
        let divCol=document.createElement('div');
        divCol.setAttribute('class','col');
        divCol.setAttribute('id',charList[i].id)
        
        // let imgDiv=document.createElement('div');
        let img=document.createElement('img');
        img.setAttribute('class','char-img');
        
        let charName=document.createElement('p');
        charName.setAttribute('class','char-name')

        let likeButton=document.createElement('button')
        likeButton.setAttribute('class','like-button');
    /////////////////////////////////////////////////

    img.src=charList[i].image;
    img.setAttribute('class','img-fluid')
    
    
    charName.textContent=charList[i].name;
    likeButton.innerHTML="<img src='./images/thumb-up.png'>Like</img>"

    divCol.append(img);
    divCol.append(charName);
    divCol.append(likeButton);
    row.append(divCol);



          
    }
}




