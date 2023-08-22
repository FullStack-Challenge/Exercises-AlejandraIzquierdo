/** 
 * TODO: Write a JavaScript program that creates a class called University with properties for university name and departments.
 *  ? Include methods to add a department, remove a department, and display all departments.
 *  ? Create an instance of the University class and add and remove departments.
 */

class University {
    #name;
    departments = []

    getAllDepartments() {        
        return this.departments;
    }

    addDepartment(newDepartment) {
        this.departments.push(newDepartment);
    }

    removeDepartment(oldDepartment) {
        this.departments = this.departments.filter(function(department) {
            return department !== oldDepartment;
        });
    }
}

const university = new University();
university.addDepartment("Economy");
university.addDepartment("Engineering");
console.log(university.getAllDepartments());
university.removeDepartment("Economy");
console.log(university.getAllDepartments());