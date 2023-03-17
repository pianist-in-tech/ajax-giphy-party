console.log("Let's get this party started!");

const form = document.querySelector('#form');
let gifContainer = document.querySelector('#div');  

async function findTerm(searchTerm) {
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=pLXfaGhuMjeHdd4ZLSTpb9lo5cRWp15X`;
    const res = await axios.get(url);
    const gifArray = res.data.data;
    const randomGif = Math.floor(Math.random()*gifArray.length);
    const gifUrl = gifArray[randomGif].images.original.url;
      //create a gif to append the image from the URL
      const gif = document.createElement('img');
      gif.src = gifUrl;
      gif.setAttribute('class',"img-fluid rounded");
      gif.setAttribute('id',"gifs");
      gifContainer.append(gif);
      removeGifs()
  }
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.querySelector('#input');
    const searchTerm = input.value;
    findTerm(searchTerm);

  });

  function removeGifs(){
    const button = document.querySelector('#remove');
     button.addEventListener('click',function(event){
      event.preventDefault();
      gifContainer.innerHTML = '';
     })

  }