let convertJsonArray = [];
let arrayOfQuestion = [];
let scorePercent = 0;
let score = 0;
let plusNumber = 0;
let negativeNumber = 0;
let randomArrayId = [];
let objArray = [];
let getObj;
let url = "https://gist.githubusercontent.com/benna100/13f5850bf78f59d9baea915cbbe9f258/raw/ef8f2b137b07b05e8f593cef0281b4f1f0aba79a/JS-3%2520questions"
let newPromise = new Promise(function (resolve, reject) {
    fetch(url).
        then(function (response) {
            if (response.status === 200) {
                console.log(response.statusText);
                response.json().then
                    (
                        function (obj) { resolve(obj) }
                    )
            }
            else {
                let mes = new Error('can not get data')
                reject(mes);
            }
        }
        )
});
let getDataFromJson = function (obj) {
    let message = JSON.stringify(obj);
    return Promise.resolve(message);
};
let mainFunc = function () {
    newPromise
        .then(getDataFromJson)
        .then(function (message) {
            setTimeout(() => {
                convertJson = JSON.parse(message)
                for (i = 0; i < convertJson.length; i++) {
                    let questionTable = document.createElement('ul');
                    let liContent = document.createElement('li');
                    let h2Content = document.createElement('h2');
                    let h2TextContent = document.createTextNode(convertJson[i].content);
                    h2Content.appendChild(h2TextContent);
                    let h3Title = document.createElement('h3');
                    let h3TextTitle = document.createTextNode(convertJson[i].title);
                    h3Title.appendChild(h3TextTitle);
                    liContent.appendChild(h2Content);
                    liContent.appendChild(h3Title);
                    let selectTitle = document.createElement('select');
                    let randomId = String.random(7)
                    randomArrayId.push(randomId);
                    selectTitle.setAttribute('id', randomId);
                    let questionTotal = convertJson[i].options.length;
                //    console.log(convertJson[i].options.length);
                    for (j = 0; j < questionTotal; j++) {
                        let optionTitle = document.createElement('option');
                        optionText = document.createTextNode(convertJson[i].options[j].content);
                        optionValue = document.createTextNode(convertJson[i].options[j].correct);
                        if (optionValue.nodeValue === 'true') {
                            let correctAnswerObj = {
                                answer: optionText.nodeValue,
                                value: optionValue.nodeValue
                            }
                            objArray.push(correctAnswerObj);
                        }
                        optionTitle.appendChild(optionText);
                        selectTitle.appendChild(optionTitle);
                    }
                    liContent.appendChild(selectTitle);
                    questionTable.appendChild(liContent);
                    document.body.append(questionTable);
                    assignIdToList();
                }
                getObj = message;
            }, 4000);
        }
        )
        .then()
        .catch(error => console.log(error.message));
};
mainFunc();
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
function assignIdToList() {
    randomArrayId.forEach(function (item, index) {
        var item = document.getElementById(item);
        item.onchange = () => {
            plusNumber = 0;
            negativeNumber = -1;
            let indexCounter = 0;
            do {
                if (item.value === objArray[indexCounter].answer) {
                    plusNumber = +1;
                    negativeNumber = 0;
                };
                indexCounter++;
            }
            while (indexCounter < objArray.length);
            score = score + negativeNumber + plusNumber;
            scorePercent = Math.round((score / (objArray).length) * 100)
            let calcResult = document.getElementById('getScore');
            calcResult.value = scorePercent;
        }
    })
}