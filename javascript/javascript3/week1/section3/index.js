 


let url = "";
let selectedText = "";
 //https://api.giphy.com/v1/gifs/search?api_key=N4J7y5alm4URdNP9zJnWIyEmL8fabgwI&q=&limit=25&offset=0&rating=G&lang=en
//var fetch = require("node-fetch");
function imageSearch(url){
fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
    let a = JSON.stringify(myJson);
  console.log(JSON.stringify(myJson));
console.log(typeof(a));
let b = JSON.parse(a);
console.log(typeof(b)); 

});
}

let imgsrc;
let searchButton = document.createElement('button');
searchButton.setAttribute('id','idselect');
searchButton.textContent = "Search";
searchButton.style.position = "absolute"
searchButton.style.left = "40px";
searchButton.style.top = "40px";
document.body.appendChild(searchButton);
searchButton.style.height = "40px";
searchButton.style.width = "80px";
searchButton.style.fontSize = "18px";

let imageWeather = document.createElement('img');
imageWeather.setAttribute('id', 'imageCanvas');
//imageWeather.src = "images/"+imageNames[0];
imageWeather.src = imgsrc;
imageWeather.style.width = "550px";
imageWeather.style.height ="550px";
imageWeather.style.left = "400px";
imageWeather.style.top = "100px";
document.body.appendChild(imageWeather);



document.getElementById('idselect').addEventListener('click',()=>{
 let selectedText = inputText.value;
 //let url ="https://api.giphy.com/v1/gifs/search?api_key=N4J7y5alm4URdNP9zJnWIyEmL8fabgwI&"+selectedText+"=&limit=25&offset=0&rating=G&lang=en"
let url ="https://api.giphy.com/v1/gifs/search?api_key=my_key="+selectedText+"&limit=50&offset=0&rating=G&lang=en"
 console.log(url);

fetch(url)
.then(response => response.json())
.then((gif) => {
 
 
  setInterval(function(){ 
    index = Math.floor(Math.random() * 49)

    imageWeather.src = gif.data[index].images.preview_webp.url;
  
  }, 1000);

});
 

    

//console.log(imageWeather.src)
 
 
}
)




// fetch("https://api.giphy.com/v1/gifs/search?q="+"cat"+"&api_key=HCRI89ixujLx2ZrfrZEmkrItQzVetl68&limit=5")
// .then(response => response.json())
// .then((gif) => {
//     console.log(gif);
//     console.log(gif.data[0].url);
//     });






let inputText = document.createElement('input');
inputText.setAttribute('id','inputText');
inputText.value = "type here";
inputText.style.position = "absolute"
inputText .style.left = "140px";
inputText .style.top = "40px";
inputText.style.height = "30px";
inputText.style.width = "140px";
inputText.style.fontSize = "18px";
document.body.appendChild(inputText);
let textSearch = document.getElementById('inputText');
textSearch.addEventListener('click',()=>{
  inputText.value = "";
}
)











