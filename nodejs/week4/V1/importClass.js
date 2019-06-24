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
    this.addNewStudent = function (studentInfo, callback) {
        let successCalLack;
        let errorCallback
        try {
            this.isValidStudent(studentInfo);
            this.students.push(studentInfo);
            callback('Successful', errorCallback);
        } catch (error) {
            callback(successCalLack, error.message)
        }
    }
    this.isValidStudent = function (new_student) {
        if (
            new_student.hasOwnProperty("name") &&
            new_student.hasOwnProperty("email") &&
            new_student.hasOwnProperty("classId") &&
            new_student.hasOwnProperty("phone")
        ) {
            const result = this.getStudentDetailByName(new_student.name);
            //   return (result)
            if (result.length === 0) {
                return result;
            } else {
                throw new Error("Student already exits");
            }
        } else {
            throw new Error("Student must have name email classId and phone ");
        }
    }
    this.deleteStudent = function (studentInfo, callback) {
        let successCalLack;
        let errorCallback
        try {
            let indexToRemove = this.isValidStudentForDelete(studentInfo);
            this.students.splice(indexToRemove, 1)
            callback('Successful', errorCallback);
        } catch (error) {
            callback(successCalLack, error.message)
        }
    }
    this.isValidStudentForDelete = function (studentInfo) {
        let name = studentInfo.name;
        let findIndexToRemove = -1;
        this.students.forEach(function (element, index) {
            let nameSelect = element.name;
            if (nameSelect === name) {
                findIndexToRemove = index;
            }
        })
        if (findIndexToRemove === -1) {
            throw new Error("Student does not exits");
        }
        return (findIndexToRemove)
    }
    this.editStudent = function (studentInfo, callback) {
        let successCalLack;
        let errorCallback
        try {
            let indexToEdit = this.isValidStudentForEdit(studentInfo);
            callback('Successful', errorCallback);
        } catch (error) {
            callback(successCalLack, error.message)
        }
    }
    this.isValidStudentForEdit = function (studentInfo) {
        let indexFind = this.isValidStudentForDelete(studentInfo[0])
        if (indexFind !== -1) {
            if (this.students[indexFind].name === studentInfo[0].name &&
                this.students[indexFind].classId === studentInfo[0].classId &&
                this.students[indexFind].email === studentInfo[0].email &&
                this.students[indexFind].phone === studentInfo[0].phone
            ) {
                this.students.splice(indexFind, 1)
            } else {
                throw new Error("Information for Student does not match with dataBase!");
            }
        } else {
            throw new Error("Student does not exist!!");
        }
        let editStudent = this.isValidStudent(studentInfo[1])
        if (editStudent.length === 0) {
            this.students.push(studentInfo[1]);
        }
    }
}
