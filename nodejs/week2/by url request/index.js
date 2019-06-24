 
//get List of all student->operationNumber = "1"
//getList of all student in desire class-> operationNumber = "2"
// student detail information ->operationNumber ="3"
//add new students to list->operationNumber ="4"
//edit information of student , 
//if his information currently located in the
//list->operationNumber ="5"


let readline = require('readline');
var server = require("./server");
let operationNumber = 5;
let className = String(8);
let studentByDetail = "Addie Waters";
let newStudentName = {
    name: 'Afshin Heidari Monfared',
    "classId": 5,
    "email": "afshin.rommel@gmail.com",
    "phone": "(515) 709-6543"
};
let editStudentInfo = {
    name: 'Cornelia Adams',
    "classId": 00,
    "email": "afshin.rommel@gmail.com",
    "phone": "(999) 799-4443"
}
server.start(operationNumber, className, studentByDetail, newStudentName, editStudentInfo);
