const fs = require('fs');
let readline = require('readline');
const StudentBook = require('./importClass.js');
const getJSON = require('get-json')
getJSON('http://172.16.250.210:8080/index.json')
  .then(function (response) {
    receivedJson = JSON.stringify(response)
    let convertData = JSON.parse(receivedJson);
    let hyf_students = new StudentBook('', '', '', '', [], [], [], [], [], [], [], [], [], [], [], [], [], []);
    for (i = 0; i < convertData.length; i++) {
      hyf_students.putList(convertData[i].name, convertData[i].classId, convertData[i].email, convertData[i].phone)
      hyf_students.putClassId(convertData[i].name, convertData[i].classId)
    }
    console.log("Please choose your question");
    console.log("students.getListByClass:          1");
    console.log("students.getStudentDetailByName:  2");
    console.log("students.addNewStudent:           3");
    console.log("students.editInfo:                4");
    console.log("students.getList:                 5");
    readline = require('readline');
    let rlx = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rlx.question("What is your question? ", function (answer) {
      console.log("Please Choose your question:", answer);
      switch (answer) {
        case '1':
          rlx.question(">>What's your classId?  ", function (classId) {
            hyf_students.getListByClassId(classId)
            rlx.close();
          });
          break;
        case '2':
          rlx.question(">>What's name of student?  ", function (studentName) {
            hyf_students.getStudentDetailByName(studentName)
            rlx.close();
          });
          break;
        case '5':
          hyf_students.getList();
          rlx.close();
          break;
        case '3':
          readline = require('readline');
          let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
          });
          let newPersonObj = {};
          answer = [];
          let questionObject = {
            1: ">>What's name of student?  ",
            2: ">>What's name of studentMail?  ",
            3: ">>What's studentClassId?  ",
            4: ">>What's studentPhone?  "
          }
          let index = 1
          readline = require('readline');
          rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
          });
          console.log(questionObject[1]);
          rl.on('line', function (line) {
            index++
            console.log(questionObject[index]);
            answer.push(line)
            if (line === "q" || index === 5) {
              answer.forEach(element => {
                console.log(element);
              });
              newPersonObj = {
                name: answer[0],
                email: answer[1],
                classId: answer[2],
                phone: answer[3]
              }
              hyf_students.addNewStudent(newPersonObj);
              rl.close();
            }
          })
          break;
        case '4':
          let backIndex;
          rlx.question(">>What's name of student?  ", function (studentName) {
            backIndex = hyf_students.getStudentDetailByName(studentName)
            console.log('this is back' + backIndex)
            if (typeof (backIndex) === 'undefined') {
              rlx.close();
              //break;
            } else {
              readline = require('readline');
              let rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                terminal: false
              });
              let newPersonObj = {};
              readline = require('readline');
              answer = [];
              let questionObject = {
                1: ">>What's name of student?  ",
                2: ">>What's name of studentMail?  ",
                3: ">>What's studentClassId?  ",
                4: ">>What's studentPhone?  "
              }
              let index = 1
              readline = require('readline');
              rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                terminal: false
              });
              console.log(questionObject[1]);
              rl.on('line', function (line) {
                index++
                console.log(questionObject[index]);
                answer.push(line)
                if (line === "q" || index === 5) {
                  answer.forEach(element => {
                    console.log(element);
                  });
                  newPersonObj = {
                    name: answer[0],
                    email: answer[1],
                    classId: answer[2],
                    phone: answer[3]
                  }
                  hyf_students.editInfo(newPersonObj, backIndex);
                  rl.close();
                }
              })
            }
          })
        default:
      }
    });
  }).catch(
    function (error) {
      let reason = new Error("can not get data")
      console.log(reason)
      console.log(error)
    }
  );