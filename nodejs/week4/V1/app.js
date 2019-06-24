var express = require('express');
let app = express();
let bodyParser = require('body-parser');
const getStudents = require('./data.json')
const StudentBook = require('./importClass.js');
const getTeachers = require('./teacherData.json')

 let listsStudents = JSON.stringify(getStudents);
let students = JSON.parse(listsStudents);
const hyf_students = new StudentBook(students);

let listTeachers = JSON.stringify(getTeachers);
let teachers = JSON.parse(listTeachers);
const hyf_teachers = new StudentBook(teachers);
 
const port = 8001;
const router = express.Router();
var logger = function (req, res, next) {
    console.info(`GOT REQUEST! ${req.method} ${req.originalUrl} ` + new Date())
    next(); // Passing the request to the next handler in the stack.
}
app.use(logger);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('HYF api'))
router.route('/students')
    .get((req, res) => {
	if(req.originalUrl !=="/api/students"){
		res.status(404);
		res.send('URL Error!');
	}else
        if (req.body.name) {
            console.log(req.body.name)
            const student = hyf_students.getStudentDetailByName(req.body.name);
            if (student.length > 0) {
				res.status(200);
                res.send(student);
            } else {
                res.status(404);
                res.send('Student does not exits!');
            }
        } else {
            res.send(hyf_students.getList(students));
        }
    })
    .post((req, res) => {
        hyf_students.addNewStudent(req.body, (successCalLack, errorCallback) => {
            if (successCalLack) {
                res.statusCode = 201;
                res.send('Successful');
            } else if (errorCallback) {
                res.statusCode = 401;
                res.send(errorCallback);
            } else {
                res.statusCode = 400;
                res.send('Invalid request');
            }
        });
    })
    .put((req, res) => {
        hyf_students.editStudent(req.body, (successCalLack, errorCallback) => {
            if (successCalLack) {
                res.statusCode = 201;
                res.send('Successful');
            } else if (errorCallback) {
                res.statusCode = 401;
                res.send(errorCallback);
            } else {
                res.statusCode = 400;
                res.send('Invalid request');
            }
        })
        
    })
    .delete((req, res) => {
        hyf_students.deleteStudent(req.body, (successCalLack, errorCallback) => {
            if (successCalLack) {
                res.statusCode = 201;
                res.send('Successful');
            } else if (errorCallback) {
                res.statusCode = 401;
                res.send(errorCallback);
            } else {
                res.statusCode = 400;
                res.send('Invalid request');
            }
        });
    });
/////////////////////////////////////
router.route('/students/:classId')
.get((req, res) => {
    let selectedClass = parseInt(req.params.classId)
    if(isNaN(selectedClass)===true ){
        res.status(404);
        res.send('Classes are number between 1 to 10!');
    }
    else if(selectedClass<0 ||selectedClass>10){
        res.status(404);
        res.send('Class does not exits!');
    }else{
        res.statusCode = 202;
        let selectedClassList = hyf_students.getListByClass(selectedClass);
        res.send(JSON.stringify(selectedClassList))
    }
})
 router.route('/teachers')
    .get((req, res) => {
        if (req.originalUrl !== "/api/teachers") {
            res.status(404);
            res.send('URL Error!');
        } else
        if (req.body.name) {
//            console.log(req.body.name)
            const teacher = hyf_teachers.getStudentDetailByName(req.body.name);
            if (teacher.length > 0) {
                res.status(200);
                res.send(teacher);
            } else {
                res.status(404);
                res.send('Teacher does not exits!');
            }
        } else {
            res.send(hyf_teachers.getList(teachers));
        }
    })
    .post((req, res) => {
        hyf_teachers.addNewStudent(req.body, (successCalLack, errorCallback) => {
            if (successCalLack) {
                res.statusCode = 201;
                res.send('Successful');
            } else if (errorCallback) {
                res.statusCode = 401;
                res.send(errorCallback);
            } else {
                res.statusCode = 400;
                res.send('Invalid request');
            }
        });
    })
app.use('/api', router);
app.listen(port, () => console.log(`HYF app listening on port ${port}!`))
