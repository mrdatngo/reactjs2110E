// Object

let aStudent = {
    id: 1,
    name: "Bui Khac Thang",
    age: 20,
    classes: ["ReactJS2110E"],
    takeExam: function() {
        console.log(aStudent.name + " is taking exam!!")
    },
    takeExam2: function() {
        console.log(this.name + " is taking exam!!")
    }
}

let fakeStudent = {
    name: "Fake Student"
}

aStudent.takeExam()
aStudent.takeExam2()

let takeExam = aStudent.takeExam
let takeExam2 = aStudent.takeExam2.bind(fakeStudent)

console.log(this)

this.name = "Global"

takeExam()
takeExam2()

// console.log("student.id", aStudent.id)
// console.log("student['id']", aStudent["id"])

// aStudent.takeExam()


// aStudent.firstName = "Bui"
// aStudent.run = function () {
//     console.log(aStudent.name + " is running...")
// }
// 0
// aStudent.run()

// console.log(aStudent)

// // for in, for of
// for(let prop in aStudent) {
//     if (typeof(aStudent[prop]) !== "function") {
//         console.log(prop, aStudent[prop], typeof(aStudent[prop]))
//     }
// }

// console.log("Keys of Object: ", Object.keys(aStudent))
// console.log("Values of Object: ", Object.values(aStudent))

// for(let data of aStudent) {
//     console.log(data)
// }

//// String
let str = '"\'Text"\\'
let str2 = "'Text'"
let str3 = `"'Text'"`

let n1 = 3
let n2 = 4
let description = "Total of" + n1 + "plus" + n2 + "is" + (n1 + n2)
let des2 = `\t Total of \n ${n1} plus ${n2} is ${ n1 + n2 }`

console.log(str, str2, str3)
console.log(description)
console.log(des2)

let des = "Today is a good good day!"
// des = "today is a good day!"
console.log("Character at Pos 0: ", des[0])
des[0] = "t"

console.log(des, des.length)
// toUpperCase, toLowerCase, charAt, indexOf, lastIndexOf
console.log("str.toUpperCase()", des.toUpperCase());
console.log("str.toLowerCase()", des.toLowerCase());
console.log("str.charAt(0)", des.charAt(0));
console.log("str.indexOf('good', 12)", des.indexOf("good", 12));
console.log("str.lastIndexOf('a')", des.lastIndexOf("a"), des.indexOf("a"));

// slice, substring, substr, replace, concat, includes
console.log("str.slice(1, 4)", des.slice(1, 4));
console.log("str.substring(1, 4)", des.substring(1, 4));
console.log("str.substr(1, 6)", des.substr(1, 6));
console.log("str.replace('good', 'awesome')", des.replace('good', 'awesome'))
console.log("str.replaceAll('good', 'awesome')", des.replaceAll('good', 'awesome')) // not safe for older browser
console.log("str.concat('!!!!')", des.concat("!!!!"));
console.log("str.includes('good')", des.includes("good"))

function replace(str, oldSub, newSub) {
    let pos = str.indexOf(oldSub)
    if (pos !== -1) {
        return str.slice(0, pos) + newSub + str.slice(pos + oldSub.length)
    }
    return str
}

let result = replace(des, 'good', 'awesome')
console.log(result)