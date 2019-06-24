let dataExtracted;
let studentNameRegister;
let studentMailRegister;
let studentPhoneRegister;
let studentClassIdRegister;
let indexForEdit;
let isPossibleToEdit = false;
const fetch = require("node-fetch");
let readline = require('readline');
let url = "http://172.16.251.135:8080/index.json";
let myPromise = new Promise(function (resolve, reject) {
    fetch(url)
        .then(function (respond) {
            if (respond.status === 200) {
                console.log(respond.statusText);
                respond.json()
                    .then(function (obj) {
                        resolve(obj)
                    })
            } else {
                let reason = new Error("can not get data")
            }
        })
})

function showOff(receiveObj) {
    let a = JSON.stringify(receiveObj);
    return (Promise.resolve(a));
}

function print(getData) {
    dataExtracted = getData;
    return (Promise.resolve(dataExtracted));
}

function printResult(readyToAnalysis) {
    dataExtracted = JSON.parse(readyToAnalysis);
}

function getJson() {
    myPromise
        .then(showOff)
        .then(print)
        .then(printResult)
}
getJson();
class StudentBook {
    constructor(name, email, classId, phone, names, emails, phones, classIds0, classIds1,
        classIds2, classIds3, classIds4, classIds5, classIds6, classIds7, classIds8, classIds9,
    ) {
        this.name = name,
            this.email = email,
            this.classId = classId,
            this.phone = phone,
            this.names = names,
            this.emails = emails,
            this.phones = phones,
            this.classIds0 = classIds0,
            this.classIds1 = classIds1,
            this.classIds2 = classIds2,
            this.classIds3 = classIds3,
            this.classIds4 = classIds4,
            this.classIds5 = classIds5,
            this.classIds6 = classIds6,
            this.classIds7 = classIds7,
            this.classIds8 = classIds8,
            this.classIds9 = classIds9
    }
    putList(name, email, classId, phone) {
        let personObj = {
            name: name,
            email: email,
            classId: classId,
            phone: phone
        }
        this.names.push(personObj);
        return `${this.names}`;
    }
    getList() {
        for (let k = 0; k < this.names.length; k++) {
            console.log(this.names[k].name);
            console.log(this.names[k].email);
            console.log("ClassId 0" + this.names[k].classId);
            console.log(this.names[k].phone);
        }
        //    return `${this.putList()}`;
    }
    putClassId(name, classId) {
        switch (classId) {
            case 0:
                {
                    var classObjPerson = {
                        name: name,
                        classId: classId
                    }
                    this.classIds0.push(classObjPerson);
                    return `${ this.classIds0}`;
                };
                break;
            case 1:
                {
                    var classObjPerson = {
                        name: name,
                        classId: classId
                    }
                    this.classIds1.push(classObjPerson);
                    return `${ this.classIds1}`;
                };
                break;
            case 2:
                {
                    var classObjPerson = {
                        name: name,
                        classId: classId
                    }
                    this.classIds2.push(classObjPerson)
                    return `${ this.classIds2}`;
                };
                break;
            case 3:
                {
                    var classObjPerson = {
                        name: name,
                        classId: classId
                    }
                    this.classIds3.push(classObjPerson);
                    return `${ this.classIds3}`;
                };
                break;
            case 4:
                {
                    var classObjPerson = {
                        name: name,
                        classId: classId
                    }
                    this.classIds4.push(classObjPerson);
                    return `${ this.classIds4}`;
                };
                break;
            case 5:
                {
                    var classObjPerson = {
                        name: name,
                        classId: classId
                    }
                    this.classIds5.push(classObjPerson);
                    return `${ this.classIds5}`;
                };
                break;
            case 6:
                {
                    var classObjPerson = {
                        name: name,
                        classId: classId
                    }
                    this.classIds6.push(classObjPerson);
                    return `${ this.classIds6}`;
                };
                break;
            case 7:
                {
                    var classObjPerson = {
                        name: name,
                        classId: classId
                    }
                    this.classIds7.push(classObjPerson);
                    return `${ this.classIds7
                }`;
                };
                break;
            case 8:
                {
                    var classObjPerson = {
                        name: name,
                        classId: classId
                    }
                    this.classIds8.push(classObjPerson);
                    return `${ this.classIds8}`;
                };
                break;
            case 9:
                {
                    var classObjPerson = {
                        name: name,
                        classId: classId
                    }
                    this.classIds9.push(classObjPerson);
                    return `${ this.classIds9}`;
                };
        }
    }
    getListByClassId(answer) {
        //   let d = "classIds"+(classId);
        console.log(answer);
        answer = parseInt(answer)
        switch (answer) {
            case 0:
                {
                    for (i = 0; i < this.classIds0.length; i++) {
                        console.log(this.classIds0[i])
                    }
                };
                break;
            case 1:
                {
                    for (i = 0; i < this.classIds1.length; i++) {
                        console.log(this.classIds1[i])
                    }
                };
                break;
            case 2:
                {
                    for (i = 0; i < this.classIds2.length; i++) {
                        console.log(this.classIds2[i])
                    }
                };
                break;
            case 3:
                {
                    for (i = 0; i < this.classIds3.length; i++) {
                        console.log(this.classIds3[i])
                    }
                };
                break;
            case 4:
                {
                    for (i = 0; i < this.classIds4.length; i++) {
                        console.log(this.classIds4[i])
                    }
                };
                break;
            case 5:
                {
                    for (i = 0; i < this.classIds5.length; i++) {
                        console.log(this.classIds5[i])
                    }
                };
                break;
            case 6:
                {
                    for (i = 0; i < this.classIds6.length; i++) {
                        console.log(this.classIds6[i])
                    }
                };
                break;
            case 7:
                {
                    for (i = 0; i < this.classIds7.length; i++) {
                        console.log(this.classIds7[i])
                    }
                };
                break;
            case 8:
                {
                    for (i = 0; i < this.classIds8.length; i++) {
                        console.log(this.classIds8[i])
                    }
                };
                break;
            case 9:
                {
                    for (i = 0; i < this.classIds9.length; i++) {
                        console.log(this.classIds9[i])
                    }
                };
                break;
        }
    }
    addNewStudent(newPersonObj) {
        this.names.push(newPersonObj);
        this.getList();
    }
    editInfo(newPersonObj, indexForEdit) {
        this.names.splice(indexForEdit, 1);
        this.names.push(newPersonObj);
        this.getList();
    }
    getStudentDetailByName(nameOfStudent) {
        console.log(nameOfStudent);
        for (let k = 0; k < this.names.length; k++) {
            if (this.names[k].name === nameOfStudent) {
                console.log(this.names[k].name);
                console.log(this.names[k].email);
                console.log("ClassId 0" + this.names[k].classId);
                console.log(this.names[k].phone);
            } else {
                console.log(" No match found")
            }
        }
    }
}
setTimeout(() => {
    let hyf_students = new StudentBook('', '', '', '', [], [], [], [], [], [], [], [], [], [], [], [], []);
    for (i = 0; i < dataExtracted.length; i++) {
        hyf_students.putList(dataExtracted[i].name, dataExtracted[i].email,
            dataExtracted[i].classId, dataExtracted[i].phone)
    };
    for (i = 0; i < dataExtracted.length; i++) {
        hyf_students.putClassId(dataExtracted[i].name, dataExtracted[i].classId);
    }
    console.log("Please choose your question");
    console.log("students.getListByClass:          1");
    console.log("students.getStudentDetailByName:  2");
    console.log("students.addNewStudent:           3");
    console.log("students.editInfo:                4");
    console.log("students.getList:                 5");
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(">>What's your question?  ", function (answer) {
        switch (answer) {
            case '1':
                rl.question(">>What's your classId?  ", function (CLASSID) {
                    hyf_students.getListByClassId(CLASSID)
                    rl.close();
                });
                break;
            case '2':
                rl.question(">>What's name of student?  ", function (studentName) {
                    hyf_students.getStudentDetailByName(studentName)
                    rl.close();
                });
                break;
            case '5':
                hyf_students.getList();
                rl.close();
                break;
            case '3':
                rl.question(">>What's name of student?  ", function (studentName) {
                    studentNameRegister = studentName
                    console.log(studentNameRegister);
                    rl.question(">>What's name of studentMail?  ", function (studentMail) {
                        studentMailRegister = studentMail
                        console.log(studentNameRegister);
                        rl.question(">>What's studentPhone?  ", function (studentPhone) {
                            studentPhoneRegister = studentPhone;
                            console.log(studentPhoneRegister);
                            rl.question(">>What's studentClassId?  ", function (studentClassId) {
                                studentClassIdRegister = studentClassId;
                                console.log(studentClassIdRegister);
                                let newPersonObj = {
                                    name: studentNameRegister,
                                    email: studentMailRegister,
                                    classId: studentClassIdRegister,
                                    phone: studentPhoneRegister
                                }
                                hyf_students.addNewStudent(newPersonObj);
                                rl.close()
                            });
                        });
                    });
                });
                break;
            case '4':
                rl.question(">>studentName?  ", function (studentName) {
                    for (i = 0; i < dataExtracted.length; i++) {
                        if (dataExtracted[i].name === studentName) {
                            isPossibleToEdit = true;
                            indexForEdit = i;
                        }
                    }
                    if (isPossibleToEdit === false) {
                        console.log(" No match found");
                    }
                    if (isPossibleToEdit === true) {
                        rl.question(">>What's name of student?  ", function (studentName) {
                            studentNameRegister = studentName
                            console.log(studentNameRegister);
                            rl.question(">>What's name of studentMail?  ", function (studentMail) {
                                studentMailRegister = studentMail
                                console.log(studentNameRegister);
                                rl.question(">>What's studentPhone?  ", function (studentPhone) {
                                    studentPhoneRegister = studentPhone;
                                    console.log(studentPhoneRegister);
                                    rl.question(">>What's studentClassId?  ", function (studentClassId) {
                                        studentClassIdRegister = studentClassId;
                                        console.log(studentClassIdRegister);
                                        let newPersonObj = {
                                            name: studentNameRegister,
                                            email: studentMailRegister,
                                            classId: studentClassIdRegister,
                                            phone: studentPhoneRegister
                                        }
                                        hyf_students.editInfo(newPersonObj, indexForEdit);
                                        rl.close()
                                    });
                                });
                            });
                        });

                    }
                });
                break;
            default:

        }
    });
}, 10000)