let selectIDs = ['input_Change', 'click_Button', 'input_Field', 'on_Input'];
let animalList = ['Cat', 'Goat', 'Horse', 'Rabbit', 'Albatross', 'Anaconda', 'Beaver', 'Goldfish', 'Hawk', 'Kingfisher', 'Leech', 'Marlin']
let mySelectList = document.createElement('select');
mySelectList.setAttribute('id', 'selectList');
for (i = 0; i < selectIDs.length; i++) {
    let myOptionList = document.createElement('option');
    //myOptionList.setAttribute("id",selectIDs[i]);
    let textAdd = document.createTextNode(selectIDs[i]);
    myOptionList.appendChild(textAdd);
    mySelectList.appendChild(myOptionList);
    document.body.appendChild(mySelectList);
}
document.getElementById('selectList').addEventListener('change', addTitle, false);
function addTitle() {
    let selectItem = document.getElementById('selectList').value;
    if (selectItem === selectIDs[0]) {
        let myInputTextField = document.createElement('input');
        myInputTextField.setAttribute('id', 'myInputTextField1');
        let textDemo = document.createTextNode('Type Your Name Here')
        myInputTextField.appendChild(textDemo);
        document.body.appendChild(myInputTextField);
        document.getElementById('myInputTextField1').addEventListener('change', changeSelect, false);
    };
    if (selectItem === selectIDs[1]) {
        makeWord();
    };
    if (selectItem === selectIDs[2]) { 
        showWord();
    };
    if (selectItem === selectIDs[3]) {
        let myInputTextField2 = document.createElement('input');
        myInputTextField2.setAttribute('id', 'myInputTextField2');
        let textDemo2 = document.createTextNode('Type Your Name Here')
        myInputTextField2.appendChild(textDemo2);
        document.body.appendChild(myInputTextField2);
        document.getElementById('myInputTextField2').addEventListener('input', onInputSelect, false);
    };
    function onInputSelect() {
        let myWord2 = makeWord();
        let animalName = selectAnimal();
        let inputWord2 = document.getElementById('myInputTextField2').value;
        textInput.value = inputWord2 + ":" + myWord2 + ":" + animalName;
    };
    function changeSelect() {
        let myWord = makeWord();
        let animalName = selectAnimal();
        let inputWord = document.getElementById('myInputTextField1').value;
        textInput.value = inputWord + ":" + myWord + ":" + animalName;
    };
    function selectAnimal() {
        let totalAnimal = animalList.length;
        let selectedAnimalIndex = Math.floor(Math.random() * totalAnimal);
        selectAnimalWord = animalList[selectedAnimalIndex];
        return selectAnimalWord;
    };
};
let press = document.createElement('button');
let textButton = document.createTextNode('New spirit animal');
press.setAttribute('id', "seeName");
press.appendChild(textButton);
document.body.appendChild(press);
document.getElementById("seeName").onclick = function () { makeWord() };
let pres = document.createElement('button');
let textButt = document.createTextNode('Spirit animal part');
pres.setAttribute('id', "seeNam");
pres.appendChild(textButt);
document.body.appendChild(pres);
document.getElementById("seeNam").onclick = function () { showWord() };
function showWord() {
    let person = prompt("Please enter your name", "");
    if (person != null) {
        let myWord = makeWord();
        textInput.value = person + ":" + myWord;
    }
};
let dataInputArray = []
let textInput = document.createElement('input');
textInput.setAttribute('value', "Hello World");
textInput.setAttribute('type', 'text');
let inputName = document.createTextNode('typeInput');
textInput.setAttribute('id', 'nameData');
textInput.appendChild(inputName);
document.body.appendChild(textInput);
let randomAlphabet = ['a', 'c', 'b', 'd', 'i', 'l', 'g', 'm', 'n', 'k']
let index = "";
let wordProduce = "";
let str1 = "";
let str2 = "";
function makeWord() {
    let wordProduce = "";
    for (i = 0; i < 10; i++) {
        index = Math.floor(Math.random() * 10);
        str2 = randomAlphabet[index];
        wordProduce = wordProduce.concat(str2);
        console.log(wordProduce);
        dataInputArray.push(wordProduce);
    };
    //alert(wordProduce);
    textInput.value = wordProduce;
    return (wordProduce);
};
function addCss() {
    press.style.position = "absolute"
    press.style.left = "950px";
    press.style.top = "200px";
    press.style.width = "180px";
    press.style.height = "100px";
    press.style.backgroundColor = 'Tan';
    press.style.fontSize = "18px";
    pres.style.position = "absolute"
    pres.style.left = "200px";
    pres.style.top = "200px";
    pres.style.width = "180px";
    pres.style.height = "100px";
    pres.style.backgroundColor = 'Wheat';
    pres.style.fontSize = "18px";
    textInput.style.position = "absolute"
    textInput.style.left = "400px";
    textInput.style.top = "100px";
    textInput.style.width = "500px";
    textInput.style.height = "150px";
    textInput.style.fontSize = "25px";
    textInput.style.backgroundColor = "GreenYellow";
    textInput.style.textAlign = "center";
};
addCss();