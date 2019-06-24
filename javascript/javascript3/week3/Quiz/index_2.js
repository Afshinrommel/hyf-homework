//const fetch = require("node-fetch");
alert('please wait up to 20 second to receive questions. you must click on Ask question level.')
let objQuestion = {};
let randomArray = [];
let shouldAdd = false;
let randomTextAnswer = [];
let randomArrayId = [];
let totalScore = 0
let kIndex = -1;
let randomArrayListId = [];
let positiveCoefficient = 0;
let resultTest = 0;
let url = "";
let commandNext = document.createElement('Button');
commandNext.id = 'commandNext';
let textCommandNext = document.createTextNode('Ask question');
commandNext.appendChild(textCommandNext);
document.body.appendChild(commandNext);
let labelScore = document.createElement('label');
let textScore = document.createTextNode('Score');
labelScore.id = 'labelScore';
labelScore.appendChild(textScore);
document.body.appendChild(labelScore);
let timeDeciSecond = document.createElement('label');
let timeDeciSecondText = document.createTextNode('Decisecond');
timeDeciSecond.appendChild(timeDeciSecondText);
timeDeciSecond.id = 'decisecond';
document.body.appendChild(timeDeciSecond);
let timeSecond = document.createElement('label');
let timeSecondText = document.createTextNode('second');
timeSecond.appendChild(timeSecondText);
timeSecond.id = 'second';
document.body.appendChild(timeSecond);
let second = 0;
let minute = 0;
let decisecond = 0;
let timeMinute = document.createElement('label');
let timeMinuteText = document.createTextNode('minute');
timeMinute.appendChild(timeMinuteText);
timeMinute.id = 'minute';
document.body.appendChild(timeMinute);
setInterval(calcTime, 100)
function calcTime() {
    decisecond = decisecond + 1
    document.getElementById('decisecond').textContent = decisecond;
    if (decisecond === 10) {
        second = second + 1
        document.getElementById('second').textContent = second;
        decisecond = 0;
        if (second === 60) {
            minute = minute + 1;
            document.getElementById('minute').textContent = minute;
            second = 0;
        }
    }
}

let easyQuestion = document.createElement('input');
easyQuestion.id = 'easyQuestion';
easyQuestion.setAttribute('type','radio');
let labelEasy = document.createElement('label');
let textLabelEasy = document.createTextNode('easy question');
labelEasy.appendChild(textLabelEasy);
document.body.appendChild(easyQuestion);
document.body.append(labelEasy);

let difficultQuestion = document.createElement('input');
difficultQuestion.id = "difficultQuestion";
difficultQuestion.setAttribute('type','radio');
let labelHard = document.createElement('label');
let textLabelHard = document.createTextNode('difficult question');
labelHard.appendChild(textLabelHard);
document.body.appendChild(difficultQuestion);
document.body.append(labelHard);

document.getElementById('easyQuestion').addEventListener('click',()=>{
    url = "https://opentdb.com/api.php?amount=50&category=23&difficulty=easy";
    document.getElementById('difficultQuestion').disabled = true;

})

document.getElementById('difficultQuestion').addEventListener('click',()=>{
    url = "https://opentdb.com/api.php?amount=50&category=23&type=multiple";
    document.getElementById('easyQuestion').disabled = true;
})
// this function produce id including text and Number.
String.random = function (length) {
    let radom13chars = function () {
        return Math.random().toString(16).substring(2, 15)
    }
    let loops = Math.ceil(length / 13)
    return new Array(loops).fill(radom13chars).reduce((string, func) => {
        return string + func()
    }, '').substring(0, length)
}
 //url = "https://opentdb.com/api.php?amount=50&category=23&type=multiple";
//let url = "https://opentdb.com/api.php?amount=50&category=23&difficulty=easy"
// Promise
//setTimeout(()=>{})
//setTimeout(()=>{console.log("wait")},8000)
let getQuestions = new Promise(function (resolve, reject) {
    
   // setTimeout(()=>{fetch(url)},4000).
    setTimeout(() => {
        fetch(url).then(function (response) {
            if (response.status === 200) {
                console.log(response.statusText)
                response.json().then
                    (
                        // (obj) => {
                        //     resolve(obj);
                        // }
                        function (obj) { resolve(obj) }
                    )
            }
            else {
                const reason = new Error('Can not get Data');
                reject(reason);
            }
        }
        )
    }, 8000)
   //fetch(url).
 
}
)
let receiveJson = function (obj) {
    console.log(typeof (obj));
    let message = JSON.stringify(obj);
    objQuestion = message;
    objAnswer = JSON.parse(objQuestion);
    return Promise.resolve(message);
};
// call our promise
let printJson = function () {
    getQuestions
        .then(receiveJson)
        .then(function (message) { setTimeout(() => { console.log(message) }, 10000) })
        .catch(error => console.log(error.message)); // fat arrow
};
printJson();
setTimeout(() => {
    console.log(objAnswer.results[0]);
    let totalQuestion = (objAnswer.results).length;
    console.log(objAnswer.results[0].question);
    let randomArray = [];
    let shouldAdd = false;
    document.getElementById('commandNext').addEventListener('click', askQuestion);
  // function askQuestion will delete previous questions and refresh page.  
    function askQuestion() {
        let askNextQuestion = document.getElementById('commandNext');
        askNextQuestion.textContent = 'Next Question'
        kIndex = kIndex + 1;
        if (kIndex < totalQuestion) {
            function removeEl() {
                try {
                    for (i = 0; i < randomArrayId.length; i++) {
                        var inputType = document.getElementById(randomArrayId[i]);
                        inputType.parentNode.removeChild(inputType);
                    }
                    for (i = 0; i < randomArrayListId.length; i++) {
                        var inputTypeList = document.getElementById(randomArrayListId[i]);
                        inputTypeList.parentNode.removeChild(inputTypeList);
                    }
                    randomArrayId = [];
                    randomArray = [];
                    randomTextAnswer = [];
                    randomArrayListId = [];
                }
                catch (err) {
                    console.log(err)
                }
            }
            removeEl();
// creating necessary elements on the page.            
            while (randomArray.length <= 3) {
                let randomNumber = Math.floor(Math.random() * 4);
                let NumberIsProducedBefore = randomArray.includes(randomNumber);
                if (NumberIsProducedBefore === false) { randomArray.push(randomNumber) }
            }
            //for(i=0;i<randomArray.length;i++){
            let firstRandomNumber = randomArray[0];
            randomTextAnswer[firstRandomNumber] = objAnswer.results[kIndex].incorrect_answers[2];
            let SecondRandomNumber = randomArray[1];
            randomTextAnswer[SecondRandomNumber] = objAnswer.results[kIndex].incorrect_answers[1];
            let thirdRandomNumber = randomArray[2];
            randomTextAnswer[thirdRandomNumber] = objAnswer.results[kIndex].incorrect_answers[0];
            let forthRandomNumber = randomArray[3];
            randomTextAnswer[forthRandomNumber] = objAnswer.results[kIndex].correct_answer;
            let correctAnswer = objAnswer.results[kIndex].correct_answer;
            ///}
            let questionName = objAnswer.results[kIndex].question;
            let labelQuestion = document.createElement('label');
            let randomId = String.random(6)
            randomArrayListId.push(randomId);
            labelQuestion.setAttribute('id', randomId);
            labelQuestion.setAttribute('class', 'newline')
            let textQuestion = document.createTextNode(questionName);
            labelQuestion.appendChild(textQuestion);
            document.body.appendChild(labelQuestion);
            for (i = 0; i < 4; i++) {
                radioInputCorrect = document.createElement('input');
                radioInputCorrect.setAttribute('class', 'radioInputClass')
                radioInputCorrect.setAttribute('type', 'radio');
                let randomId = String.random(7)
                randomArrayId.push(randomId);
                radioInputCorrect.setAttribute('id', randomArrayId[i]);
                radioInputCorrect.name = randomTextAnswer[i];
                let labelAnswer = document.createElement('label');
                randomId = String.random(6)
                randomArrayListId.push(randomId);
                labelAnswer.setAttribute('id', randomId);
                labelAnswer.setAttribute('class', 'newline')
                //  let answerNameCorrect = document.createTextNode(objAnswer.results[0].correct_answer);
                let answerNameCorrect = document.createTextNode(randomTextAnswer[i]);
                labelAnswer.appendChild(answerNameCorrect);
                document.body.appendChild(radioInputCorrect);
                document.body.appendChild(labelAnswer);
            }
            function assignIdToList() {
                randomArrayId.forEach(function (item, index) {
                    var item = document.getElementById(item);
                    item.onclick = () => {
                        for (i = 0; i < randomArrayId.length; i++) {
                            if (randomArrayId[i] !== item.id) {
                                //  document.getElementById(randomArrayId[i]).checked = false;
                                document.getElementById(randomArrayId[i]).disabled = true;
                            }
                        }
                        if (item.name === correctAnswer) {
                            //  alert("well done" + correctAnswer);
                            totalScore = totalScore + 1
                            document.getElementById('labelScore').textContent = totalScore;
                        } else {
                            totalScore = totalScore - 1;
                            document.getElementById('labelScore').textContent = totalScore;
                        }
                    }
                })
            }
// assign individual id to each elements that may be click bu user            
            assignIdToList();
            //    removeEl();    
        } else {
            alert('Test Is finished');
            if (totalScore < 0) {
                totalScore = 0;
            }
            // with attention that total questions are 50;        
            let timeScore = (minute*60 + second);
            if (timeScore < 55) {
                positiveCoefficient = 10
            }
            else if (55 <= timeScore && timeScore < 70) { positiveCoefficient = 5 }
            else {
                positiveCoefficient = 0
            };
            resultTest = 100 * ((totalScore + positiveCoefficient) / totalQuestion)
            document.getElementById('labelScore').textContent = resultTest;
        }
    }
}, 16000)