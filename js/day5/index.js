// Array
let studentNames = ["Tan", "Kien", "Nam", 4, true, {}]
let numbers = [4, 5, 4, 7]

let array2Dimension = [
    [10, 10, 10, 10, 10],
    [9, 9, 9, 9, 9, 9],
    [6, 8, 2, 10, 3]
]

let students = [
    {
        name: "Tan",
        marks: [10, 10, 10, 10, 10],
    },
    {
        name: "Van",
        marks: [6, 8, 2, 10, 3],
    }
]

console.log(studentNames, numbers, array2Dimension)
console.log(students, "number of students: " + students.length,
    "isArray", Array.isArray(students), students instanceof Array);

for (let i = 0; i < students.length; i++) {
    let student = students[i]
    if (student == "Tan") {
        console.log(student)
        break
    }
}

students.forEach((student) => {
    console.log(student)
})

// array methods
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
students = []

students.push({
    name: "Kien",
    age: 20
})

students.push({
    name: "Nam",
    age: 21
})

students.unshift({
    name: "Phi",
    age: 19
})

console.log([...students]) // spread operators - copy shadow

// let lastStudent = students.pop() // get and remove last value
let firstStudent = students.shift()

// queue (push, shift), stack(push, pop)
console.log(students, firstStudent)

// indexOf, lastIndexOf, reverse, slice, splice, join
console.log(numbers.indexOf(4))
console.log(numbers.lastIndexOf(4))

console.log([...students])
// let studentsCopy = [...students]
// studentsCopy.pop()
// studentsCopy[0].name = "Kien 2"
// let reverseStudents = studentsCopy.reverse()
// console.log(reverseStudents)
students.push({
    name: "Tien",
    age: 20
})
console.log(students)
console.log("students.slice(1, students.length)",
    students.slice(1));

// copy array
console.log(students.slice(0));

// splice - add, remove elements in middle of array
console.log(students)
console.log(students.splice(1, 2, { name: "Van"}, { name: "Phi"}))
console.log(students)

// console.log(student)

console.log(numbers)
console.log(numbers.join(","))

// let name = "Khanh"
// let name2 = name
// name2 = "Khanh 2"
// console.log(name, name2)

// Copy object
let student = {
    name: "Khanh",
    age: 20,
    smartPhone: {
        color: "white",
        brand: "iphone"
    }
}
// shadow copy
// too heavy
let copyStudent1 = {
    name: student.name,
    age: student.age,
    smartPhone: student.smartPhone,
    // smartPhone: {
    //     color: student.smartPhone.color,
    //     brand: student.smartPhone.brand
    // }
}

// copyStudent1.smartPhone.color = "red"

// apply for modern browser (ES6 supported)
let copyStudent2 = {
    ...student // spread operator
}

// older way
let copyStudent3 = {}
Object.assign(copyStudent3, student)

// use JSON - deep copy
let copyStudent4 = JSON.parse(JSON.stringify(student))
copyStudent4.smartPhone.color = "red"

// copyStudent.name = "Khanh 2"
console.log(student, copyStudent1, copyStudent2, copyStudent3, copyStudent4)

// callback
console.log("------------------------------------")
// console.log(students, students.indexOf({name: 'Van'})) // can not

let foundCb = function(student, index, students) {
    console.log(student, index, students)
    return student.name === "Van"
}
// console.log(foundCb(students[1]))
let foundStudent = students.find(foundCb)
console.log(foundStudent);

// let myFind = function (cb) {
//     for(let i = 0; i < students.length; i++) {
//         if (cb(students[i], i, students)) {
//             return students[i]
//         }
//     }
// }

// console.log(myFind(foundCb))

// callback
// function hello() {
//     console.log("Hello")
// }

// function callHelloForMe(callFc) {
//     callFc()
// }

// callHelloForMe(hello)