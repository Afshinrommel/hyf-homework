module.exports = function (name, email, classId, phone, names, emails, phones, classIds0, classIds1,
        classIds2, classIds3, classIds4, classIds5, classIds6, classIds7, classIds8, classIds9, classIds10) {
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
                this.classIds9 = classIds9,
                this.classIds10 = classIds10
        this.putList = function (name, email, classId, phone) {
                let personObj = {
                        name: name,
                        email: email,
                        classId: classId,
                        phone: phone
                }
                this.names.push(personObj);
                return this.names;
        }
        this.getList = function () {
                this.names.forEach(function (element) {
                        console.log(element);
                })
        }
        this.putClassId = function (name, classId) {
                var classObjPerson = {
                        name: name,
                        classId: classId
                }
                let makeArray = "classIds" + classId;
                makeArray = String(makeArray);
                makeArray = eval(makeArray);
                makeArray.push(classObjPerson);
                return this.makeArray;
        }
        this.getListByClassId = function (classId) {
                let predefinedArray = "classIds" + classId;
                predefinedArray = String(predefinedArray);
                predefinedArray = eval(predefinedArray);
                predefinedArray.forEach(function (element) {
                        console.log(element);
                })
        };
        this.getStudentDetailByName = function (nameOfStudent) {
                index = this.names.map(function (element) {
                        return element.name;
                }).indexOf(nameOfStudent);
                try {
                        console.log(this.names[index].name);
                        console.log(this.names[index].email);
                        console.log(this.names[index].classId);
                        console.log(this.names[index].phone);
                        return index;
                } catch (e) {
                        console.log(" No match found")
                }
        }
        this.getList = function () {
                this.names.forEach(function (element) {
                        console.log(element.name);
                        console.log(element.email)
                        console.log(element.classId)
                        console.log(element.phone)
                })
        }
        this.addNewStudent = function (newPersonObj) {
                this.names.push(newPersonObj)
                this.getList();
        }
        this.editInfo = function (newPersonObj, backIndex) {
                this.names.splice(backIndex, 1);
                this.names.push(newPersonObj);
                this.getList();
        }
}