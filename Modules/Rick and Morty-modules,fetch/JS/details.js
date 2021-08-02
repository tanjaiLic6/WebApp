let imgBig=document.querySelector('.img-big');
let detailsWrap=document.querySelector('.details-part');

let getDetails= ()=>{
    let idLocal=localStorage.getItem('id');
    // let idLocal=1000;

    const requestUrl = 'https://rickandmortyapi.com/api/character/'+idLocal;


    fetch(requestUrl)
    
    .then( (response)=> {
        if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
    
    
    })
    .then((data)=>{
       imgBig.src=data.image;
    // console.log(data)

       let name=document.createElement('p');
       let gender=document.createElement('p');
       let species=document.createElement('p');
       let status=document.createElement('p');

       name.textContent='Name:'+data.name;
       gender.textContent='Gender:'+data.gender;
       species.textContent='Species:'+data.species;
       status.textContent='Status:'+data.status;

       detailsWrap.append(name);
       detailsWrap.append(gender);
       detailsWrap.append(species);
       detailsWrap.append(status);
       
    })

    .catch((error)=>{
        console.log(error)
        window.location.href='./index.html';
        alert('Please try another character')

    })
    
}

getDetails()

