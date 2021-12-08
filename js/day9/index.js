let btnSpeak = document.querySelector(".js-btn-speak")

class Person {
    id = ""
    name = ""

    constructor(id, name) {
        this.id = id
        this.name = name
    }

    speak = () => {
        console.log(this.name + " is speaking...")
    }
}

class Student extends Person {
    constructor(id, name) {
        super(id, name)
        this.speak2 = this.speak2.bind(this)
    }

    // overide
    speak = () => {
        console.log(this.name + " is talking....")
    }

    exam() {
        console.log(this.name + " is taking an examination")
    }

    speak2 = function() {
        console.log(this.name + " dang noi chuyen")
    }//.bind(this)
}

class Teacher extends Person {
    constructor(id, name) {
        super(id, name)
    }
}

let student1 = new Student("1", "Khanh")
console.log(student1)
let teacher1 = new Teacher("T1", "Teacher")
console.log(teacher1)
student1.speak()
// let student2 = new Student("2", "Quy")

btnSpeak.addEventListener("click", student1.speak)
btnSpeak.addEventListener("click", student1.speak2)

// student1.exam()
// student2.exam()

// let takeExam = student1.exam.bind(student1)
// takeExam()

// let speak = student1.speak
// speak()

// function takeExam(cb) {
//     setTimeout(() => {
//         cb()
//     }, 1000)
// }

// takeExam(student1.exam)
// student1.ID = "1"
// student1.name = "Khanh"

// student1 = {
//     ID: "1",
//     fullName: "Khanh"
// }

// console.log(student1, student2)