const getStudents = require('./index.json')
let listsStudents = JSON.stringify(getStudents);
let students = JSON.parse(listsStudents);


const StudentBook = require('./importClass.js');
const hyf_students = new StudentBook(students);
console.log(hyf_students.getListByClass(8))
//hyf_students.getList();
let newStudent = {
    name: 'Mario Craig',
    "classId": 8,
    "email": "afshin.rommel@gmail.com",
    "phone": "(515) 709-3802"
}
let editStudent = 'Cornelia Adams'
 hyf_students.addNewStudent(newStudent)
 hyf_students.editStudentInfo(newStudent, editStudent)
console.log(hyf_students.getStudentDetailByName('Mario Craig'))