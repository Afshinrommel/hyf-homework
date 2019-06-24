//let url = "";
var animalName = prompt("Please enter a name")
//console.log(animalName);
document.getElementById('inputText').value = animalName;
let randomArrayNumber = [];
let randomNumberIndex = -1;
let selectedProduct = document.querySelector('ul');
let nestedList = document.querySelectorAll('ul > li');
//console.log(nestedList.length);
let diff = 80 - nestedList.length;
//difference = diff -1;
for (i = 0; i < diff; i++) {
  let liList = document.createElement('li');
  selectedProduct.appendChild(liList);
}
nestedList = document.querySelectorAll('ul > li');
//console.log(nestedList.length);
let textSearch = document.getElementById('inputText');
textSearch.addEventListener('click', () => {
  inputText.value = "";
}
)
let selectedText = inputText.value;
//let url ="https://api.giphy.com/v1/gifs/search?api_key=N4J7y5alm4URdNP9zJnWIyEmL8fabgwI&"+selectedText+"=&limit=25&offset=0&rating=G&lang=en"
let url = "https://api.giphy.com/v1/gifs/search?api_key=N4J7y5alm4URdNP9zJnWIyEmL8fabgwI&q=" + selectedText + "&limit=80&offset=0&rating=G&lang=en"
// console.log(url);
fetch(url)
  .then(response => response.json())
  .then((gif) => {
    for (i = 0; i < 79; i++) {
      let imageShow = document.createElement('img');
      //    console.log(typeof (gif));
      //   console.log(gif.data.length);
      let imgAddress = gif.data[i].images.fixed_height_still.url;
      imageShow.src = imgAddress;
      imageShow.style.width = "350px";
      nestedList[i].appendChild(imageShow);
      let randomNum = String.random(7)
      randomArrayNumber.push(randomNum);
      nestedList[i].setAttribute('id', randomArrayNumber[i]);
    }
  });
let ThumbsUp = document.querySelector('.accept');
ThumbsUp.addEventListener('click', () => {
  goToRight();
});
/////Do for Down
let ThumbsDown = document.querySelector('.reject');
ThumbsDown.addEventListener('click', () => {
  goToLeft();
});
////// a function for producing random number
String.random = function (length) {
  let radom13chars = function () {
    return Math.random().toString(16).substring(2, 15)
  }
  let loops = Math.ceil(length / 13)
  return new Array(loops).fill(radom13chars).reduce((string, func) => {
    return string + func()
  }, '').substring(0, length)
}
//window.addEventListener('click',()=>{console.log('you press')})
window.addEventListener('keydown', function letMe(e) {
  if (e.keyCode === 37) { goToLeft() }
  if (e.keyCode === 39) { goToRight() }
  // console.log(e.keyCode)
})
function goToLeft() {
  randomNumberIndex = randomNumberIndex + 1;
  document.getElementById(randomArrayNumber[randomNumberIndex]).animate({
    transform: ['translateX(0)', 'translateX(-900px)'],
    opacity: [1, 0]
  }, {
      duration: 4000,
      composite: 'add'
    });
  document.getElementById(randomArrayNumber[randomNumberIndex]).style.transform = "translateX(-900px)";
  leftPromise = new Promise(function (resolve) {

    setTimeout(() => { console.log('makeObj') }, 4000);
    let sendObj = {
      duration: 14000,
      composite: 'add'
    }
    resolve(sendObj);
  })
  function nextCenterViewFromLeft(sendObj) {
    randomNumberIndex = randomNumberIndex + 1;
    document.getElementById(randomArrayNumber[randomNumberIndex]).animate({
      transform: ['translateY(0)', 'translateY(-38px)'],
      opacity: [0, 1]
    }, sendObj);
    document.getElementById(randomArrayNumber[randomNumberIndex]).style.transform = "translateY(-38px)";
    document.getElementById(randomArrayNumber[randomNumberIndex]).style.opacity = 1;
  }
  leftPromise
    .then(nextCenterViewFromLeft)
}



function goToRight() {
  randomNumberIndex = randomNumberIndex + 1;
  document.getElementById(randomArrayNumber[randomNumberIndex]).animate({
    transform: ['translateX(0)', 'translateX(900px)'],
    opacity: [1, 0]
  }, {
      duration: 4000,
      composite: 'add'
    });
  document.getElementById(randomArrayNumber[randomNumberIndex]).style.transform = "translateX(900px)";
  rightPromise = new Promise(function (resolve) {

    setTimeout(() => { console.log('makeObj') }, 4000);
    let sendObj = {
      duration: 14000,
      composite: 'add'
    }
    resolve(sendObj);
  })
  function nextCenterViewFromRight(sendObj) {
    randomNumberIndex = randomNumberIndex + 1;
    document.getElementById(randomArrayNumber[randomNumberIndex]).animate({
      transform: ['translateY(0)', 'translateY(-38px)'],
      opacity: [0, 1]
    }, sendObj
    );
    document.getElementById(randomArrayNumber[randomNumberIndex]).style.transform = "translateY(-38px)";
    document.getElementById(randomArrayNumber[randomNumberIndex]).style.opacity = 1;
  }
  rightPromise
    .then(nextCenterViewFromRight)
}
