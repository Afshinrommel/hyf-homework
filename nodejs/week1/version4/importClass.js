module.exports = function(students, newStudent, editStudent){
	    this.students = students
        this.newStudent = newStudent
        this.editStudent = editStudent

        this.getListByClass= function(classId) {
            return this.students.filter(student => student.classId === classId)
        }
        this.getList= function(){
            return this.students.forEach(student => console.log(student))
        }
        this.getStudentDetailByName= function(name) {
            return this.students.filter(student => student.name === name)
        }
        let findIndexToRemove = -1
        this.addNewStudent = function (newStudent) {

            let name = newStudent.name;
            this.students.forEach(function(element,index) {
                let nameSelect = element.name;
                if(nameSelect === name){
                    console.log(nameSelect);
                     findIndexToRemove = index
                    console.log(index);
                }
              });
              if(typeof(findIndexToRemove)!== -1){
                this.students.splice(findIndexToRemove, 1);
              }
              
            this.students.push(newStudent);
            this.getList();
        }

        this.editStudentInfo = function (newStudent, editStudent) {
            let index = this.students.map(function (element) {
                return element.name;
            }).indexOf(editStudent);
            this.students.splice(index, 1);
            this.students.push(newStudent);
            this.getList();
        }
	
}

