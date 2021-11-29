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
// console.log(students.splice(1, 2, { name: "Van"}, { name: "Phi"}))
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

let foundCb = function (student, index, students) {
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

console.log("-------------------------------------")
console.log(students)
// find all students have age = 20
let studentsAge20 = students.filter((student, index, students) => {
    console.log(student, index, students)
    return student.age === 20
})

students = [{
    firstName: "Nguyen",
    lastName: "Anh Tai",
    age: 20
},
{
    firstName: "Bui",
    lastName: "Huu Huy",
    age: 21
},
{
    firstName: "Le",
    lastName: "Huong",
    age: 20
}]

console.log("studentsAge20", studentsAge20)
// find all students have last character of firstName is 'n'
let studentsHaveLastNCharacters = students.filter((student) => {
    // code here
    if (!student.firstName) {
        return false
    }
    // return student.firstName[student.firstName.length - 1] === "n"
    return student.firstName.slice(-1)
})

console.log("studentsHaveLastNCharacters: ", studentsHaveLastNCharacters)


let studentWithFullNames = students.map(student => {
    return {
        ...student,
        fullName: student.firstName + " " + student.lastName
    }
})

studentWithFullNames[0].firstName = "Nguyen 2"
console.log("studentWithFullNames: ", studentWithFullNames)

// sort - (quick sort)
// age descending
console.log(students.sort((s1, s2) => {
    return s2.age - s1.age
}))

// lastName alphabet - ascending
console.log(students.sort((s1, s2) => {
    if (s1.lastName > s2.lastName) {
        return 1
    } else if (s1.lastName < s2.lastName) {
        return -1
    } else {
        return 0
    }
}))

numbers = [5, 2, 2, 4, 7]
// console.log("numbers: ", numbers)
// console.log(numbers.sort().reverse())

// reduce - hard - less useful
console.log("Total: ", numbers.reduce((acc, value) => {
    console.log(value, acc)    
    return value + acc
}))

console.log("concat: ", [2, 3, 4].concat(["string", 3]))