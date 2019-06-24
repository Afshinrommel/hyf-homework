const students = require('./index.json')
class Students {
    constructor(students, newStudent, editStudent) {
        this.students = students
        this.newStudent = newStudent
        this.editStudent = editStudent
    }
    getListByClass(classId) {
        return this.students.filter(student => student.classId === classId)
    }
    getListByName(name) {
        return this.students.filter(student => student.name === name)
    }
    getList() {
        return this.students.forEach(student => console.log(student))
    }
    addList(newStudent) {
        let newList = JSON.stringify(this.students);
        let badList = JSON.parse(newList);
        badList.push(newStudent);
        let plist = JSON.stringify(badList)
        return (plist)
    }
    editList(newStudent, editStudent) {
        let newList = JSON.stringify(this.students);
        let badList = JSON.parse(newList);
        let index = badList.map(function (element) {
            return element.name;
        }).indexOf(editStudent);
        badList.splice(index, 1);
        badList.push(newStudent);
        let plist = JSON.stringify(badList)
        return (plist)
    }
}
const hyf_students = new Students(students);
console.log(hyf_students.getListByClass(8))
console.log(hyf_students.getList())
console.log(hyf_students.getListByName('Mario Craig'))
let newStudent = {
    name: 'Afshin',
    "classId": 8,
    "email": "afshin.rommel@gmail.com",
    "phone": "(515) 709-3802"
}
let editStudent = 'Cornelia Adams'
console.log(hyf_students.addList(newStudent))
console.log(hyf_students.editList(newStudent, editStudent))