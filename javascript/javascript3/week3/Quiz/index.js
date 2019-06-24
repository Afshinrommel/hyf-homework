
let convertJson;
let arrayOfQuestion=[];

let text1 = 'Ham(incorrect)';
let text2 = 'Here(correct)';
let textArray = [text1,text2];

// secondUl.id = "secondUl";
// let thirdUl = document.createElement('ul');
// thirdUl.id = 'thirdUl.id'

//https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json
let getObj;
//onst fetch = require("node-fetch");
let url = "https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json"
// Promise
let myPromise = new Promise(function(resolve,reject){
   fetch(url).
   then(function(response){
           if(response.status ===200){
            console.log(response.statusText);
               response.json().then
               (
                   function(obj){resolve(obj)}
               )
           }
           else{
               let mes = new Error('can not get data')
               reject(mes);
           }
       }
   ) 
    });
let showOFF= function(obj){
let message = JSON.stringify(obj);
return Promise.resolve(message);
    };
    let askMom = function () {
    myPromise
    .then(showOFF)
    .then(function (message) { setTimeout(() => { console.log(message)
        console.log(message);
         convertJson = JSON.parse(message)

         console.log(convertJson[0].content)
for (i=0;i<convertJson.length;i++){
    console.log(convertJson[i].content)
arrayOfQuestion.push(convertJson[i].content)
let myObject= {
    title:convertJson[i].title,
    content:convertJson[i].content,
    options:convertJson[i].options,
}
}
let firstUl = document.createElement('ul');
let secondUl = document.createElement('ul');

for (i=0;i<convertJson.length;i++){
firstUl.id = "firstUl";
let liTitle = document.createElement('li');
let textTitle = document.createTextNode(convertJson[i].title);
//let textContent2 = document.createTextNode(convertJson[i].content)


let selectTitle = document.createElement('select');
//selectTitle.id = 'selectTitle';
selectTitle.setAttribute('id','selectTitle');



for (j= 0;j<textArray.length;j++){
let optionTitle = document.createElement('option');
optionText = document.createTextNode(textArray[j]);
optionTitle.appendChild(optionText);
selectTitle.appendChild(optionTitle);
}

liTitle.appendChild(selectTitle);

liTitle.appendChild(textTitle);
firstUl.appendChild(liTitle);
let liContent = document.createElement('li');
let textContent1 = document.createTextNode(convertJson[i].content);
liContent.appendChild(textContent1);
secondUl.appendChild(liContent);

}

document.body.append(firstUl);
//document.body.append(secondUl);


var x = document.getElementById('selectTitle');
console.log(x);
x.addEventListener('change',()=>{
    console.log(x.value);
    if(x.value==='Ham(incorrect)'){
alert(x.value);
    }
})

getObj = message;
    }, 1000) ;
    
})
.then(
  
)
    .catch(error => console.log(error.message)); 
    
};
askMom();

// document.querySelector(select).addEventListener('click',()=>{
//     "erfref"
// })


// document.getElementById('selectTitle').addEventListener('click', getTotalPrice);
// function getTotalPrice(){
// alert('dfdsfs')
// }