const url = require('url');
let students = require('./data/data.json')
exports.studentsList = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    var name = 'World';
    if (reqUrl.query.name) {
        name = reqUrl.query.name
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(students));
};
exports.studentInfo = function (req, res) {
    body = '';
    req.on('data', function (chunk) {
        body = body + chunk;
    });
    req.on('end', function () {
        postBody = JSON.parse(body);
        var studentName = {
            "students name is": postBody.name
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        studentName = postBody.name;
        let student = students.filter(index => {
            return index.name === studentName;
        })
        res.end(JSON.stringify(student))

    })
}
exports.studentsByClassId = function (req, res) {
    body = '';
    req.on('data', function (chunk) {
        body = body + chunk;
    });

    req.on('end', function () {
        postBody = JSON.parse(body);
        var studentName = {
            "classId": postBody.classId
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        let classIdSelect = postBody.classId;
        let studentsByClassId = students.filter(index => {
            return index.classId === classIdSelect;
        })
        res.end(JSON.stringify(studentsByClassId))
    })
}
exports.studentAdd = function (req, res) {
    body = '';
    req.on('data', function (chunk) {
        body = body + chunk;
    });
    req.on('end', function () {
        postBody = JSON.parse(body);
        var studentInformation = {
            "students information": postBody
        }
        let name = postBody.name;
        let findIndexToRemove = -1
        students.forEach(function (element, index) {
            let nameSelect = element.name
            if (nameSelect === name) {
                console.log(nameSelect)
                findIndexToRemove = index
                console.log(index)
            } else {
                console.log("Student does not find")
            }
        })
        if (findIndexToRemove === -1) {
            students.push(postBody);
            res.end(JSON.stringify(students))
        }

    })
}
exports.studentDelete = function (req, res) {
    body = '';
    req.on('data', function (chunk) {
        body = body + chunk;
    });
    req.on('end', function () {
        postBody = JSON.parse(body);
        var studentName = {
            "students name is": postBody.name
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        // res.end(JSON.stringify(studentName));
        let name = postBody.name;
        let findIndexToRemove = -1
        students.forEach(function (element, index) {
            let nameSelect = element.name
            if (nameSelect === name) {
                console.log(nameSelect)
                findIndexToRemove = index
                console.log(index)
            } else {
                console.log("Student does not find")
            }
        })
        if (findIndexToRemove !== -1) {
            students.splice(findIndexToRemove, 1)
        }
        res.end(JSON.stringify(students))
    });
}

exports.studentEditInfo = function (req, res) {
    body = '';
    req.on('data', function (chunk) {
        body = body + chunk;
    });
    req.on('end', function () {
        postBody = JSON.parse(body);
        var studentName = {
            "students name is": postBody.name
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        // res.end(JSON.stringify(studentName));
        let name = postBody.name;
        let findIndexToRemove = -1
        students.forEach(function (element, index) {
            let nameSelect = element.name
            if (nameSelect === name) {
                console.log(nameSelect)
                findIndexToRemove = index
                console.log(index)
            } else {
                console.log("Student does not find")
            }
        })
        if (findIndexToRemove !== -1) {
            students.splice(findIndexToRemove, 1)
            students.push(postBody);
            res.end(JSON.stringify(students))
        }

    });

}
exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};