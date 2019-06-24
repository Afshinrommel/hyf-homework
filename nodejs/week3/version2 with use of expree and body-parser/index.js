let express = require('express');
let app = express();
let bodyParser = require('body-parser');
//let   bodyParser = require('body-parser').json();
let multer = require('multer');
let upload = multer();
const getStudents = require('./index.json')
let listsStudents = JSON.stringify(getStudents);
let students = JSON.parse(listsStudents);
const StudentBook = require('./importClass.js');
const hyf_students = new StudentBook(students);
app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    let receiveList = hyf_students.getList(students)
    res.send(JSON.stringify(receiveList))
});
app.get('/api/:classid', (req, res) => {
    // http://localhost:3000/api/7
    let selectedClass = req.params.classid
    selectedClass = parseInt(selectedClass)
    let selectedClassList = hyf_students.getListByClass(selectedClass)
    res.send(JSON.stringify(selectedClassList))
});
app.get('/api/name/:studentName', (req, res) => {
    //http://localhost:3000/api/name/Mario Craig
    let selectedStudent = req.params.studentName;
    let selectedStudentDetail = hyf_students.getStudentDetailByName(selectedStudent)
    res.send(JSON.stringify(selectedStudentDetail))
});
app.delete('/api/name/delete/:studentName', (req, res) => {
    let name = req.params.studentName;
    let receiveListAfterDelete = hyf_students.deleteStudent(name)
    res.end(JSON.stringify(receiveListAfterDelete))
})
app.put('/api/name/edit', bodyParser.json(), (req, res) => {
    let newStudent = req.body[1];
    let editStudent = req.body[0];
    console.log(req.body)
    let receiveListAfterEdit = hyf_students.editStudentInfo(newStudent, editStudent)
    res.end(JSON.stringify(receiveListAfterEdit))
})
app.post('/api/name/add', bodyParser.json(), (req, res) => {
    //console.log(res.json(req.body))
    //  console.log(req.body)
    let newStudent = req.body;
    let receiveList = hyf_students.addNewStudent(newStudent);
    res.end(JSON.stringify(receiveList))
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}...`)
})