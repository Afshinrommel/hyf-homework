module.exports = function (students, newStudent, editStudent) {
    this.students = students
    this.newStudent = newStudent
    this.editStudent = editStudent
    this.getListByClass = function (classId) {
        return this.students.filter(student => student.classId === classId)
    }
    this.getList = function (students) {
        return (this.students)
    }
    this.getStudentDetailByName = function (name) {
        return this.students.filter(student => student.name === name)
    }
    this.addNewStudent = function (newStudent) {
        let findIndexToRemove = -1
        let name = newStudent.name;
        this.students.forEach(function (element, index) {
            let nameSelect = element.name;
            if (nameSelect === name) {
                console.log(nameSelect);
                findIndexToRemove = index
                console.log(index);
            }
        });
        if (findIndexToRemove !== -1) {
            this.students.splice(findIndexToRemove, 1);
        }
        this.students.push(newStudent);
        return (this.students);
    }
    this.deleteStudent = function (name) {
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
        return (this.students);
    }
    this.editStudentInfo = function (newStudent, editStudent) {
        let findIndexToRemove = -1
        let name = editStudent.name;
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
        this.students.push(newStudent);
        return (this.students);
    }
}