let http = require('http');
var students = require('./data/data.json');
function start(operationNumber, className, studentByDetail, newStudentName, editStudentInfo) {
    function onRequest(request, response) {
        if (request.url === "/1" ) {
            console.log("Request received for json show");
            response.writeHead(200, {
                "Content-Type": "text/json"
            })
            response.end(JSON.stringify(students))
        }
        if (request.url === "/2") {
            var selectedClass = students.filter(function (index) {
                return index.classId = className;
            })
            response.end(JSON.stringify(selectedClass))
        }
        if (request.url === "/3") {
            var selectedName = students.filter(function (index) {
                return index.name = studentByDetail;
            })
            response.end(JSON.stringify(selectedName))
        }
        if (request.url === "/4") {
            let newPerson = students.indexOf(newStudentName);
            if (newPerson === -1) {
                students.push(newStudentName);
            }
            response.end(JSON.stringify(students))
        }
        if (request.url === "/5") {
            let findIndexToRemove = -1
            let name = editStudentInfo.name
            students.forEach(function (element, index) {
                let nameSelect = element.name
                if (nameSelect === name) {
                    console.log(nameSelect)
                    findIndexToRemove = index
                    console.log(index)
                }
            })
            if (findIndexToRemove !== -1) {
                students.splice(findIndexToRemove, 1)
				students.push(editStudentInfo)
            }

         
            response.end(JSON.stringify(students))
        }
    }
    http.createServer(onRequest).listen(2000);
    console.log('server has started open browser on port 2000')
}
exports.start = start;