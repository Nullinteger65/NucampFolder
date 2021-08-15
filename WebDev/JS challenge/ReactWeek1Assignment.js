class student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;

    }

}

class bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(students) {

        if (this.students.filter(student => student.email === student.email).length) {
            // this.students = this students;
            console.log(`Cannot register ${student.email} because he/she is already registered`);
        } else {
            console.log(`Registering ${student.email} to the bootcamp Web Dev Fundamentals`);
            this.students.push(student);
        }
        return this.students;
    }
}

const newStudent = new Student("Neo", "neo@matrix.com", "Everywhere");
const bootcamp = new Bootcamp("Web Dev Fundamentals", "Beginner");