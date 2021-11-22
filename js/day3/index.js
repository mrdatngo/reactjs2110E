// function

// regular function
let x = 10

function hello() {
    x = 5;
    console.log("Hello!", x)
}

hello()
console.log(x)


// check a number is prime

function isPrime(number) {
    if (number < 2) {
        return false
    } else {
        let check = true
        for(let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                check = false
                break
            }
        }
        return check
    }
}

let isPrimeNumber = isPrime(4)

if (isPrimeNumber) {
    console.log("YEESS")
} else {
    console.log("NOOOOP")
}
console.log(isPrime(10))

// calculate total

function total(number1, number2, ...rest) {
    console.log(arguments)
    console.log(rest)
    return number1 + number2
}
console.log("total: ", total(4, 5, 2, 6, 8, 10, 5, 8))
console.log("main")
console.log("--------------00----------------")

// pass parameter by value ( tham tri )
let numberGlobal = 5
function changeNumber(number) {
    number = 0
    console.log(number)
}
changeNumber(numberGlobal)
console.log(numberGlobal)

// pass parameter by reference ( tham chieu )
let student = {
    mark: 10
}
function changeStudentMark(student) {
    student.mark = 5
}
changeStudentMark(student)
console.log(student)

let student2 = student
student2.mark = 1
console.log(student)

// recursive - de quy
function totalFromZeroTo(number) {
    if (number === 1) {
        return 1
    }
    return number + totalFromZeroTo(number - 1)
}

totalFromZeroTo(5)

// expression func
let sayHello = function() {
    console.log("Hello world")
}

// arrow function ( fat arrow )
let sayHello2 = () => {
    console.log("Hello world")
}

let total2Number = (n1, n2) => n1 + n2

// NUMBERS
let strNumber = "1234"

let number = parseFloat(strNumber)
console.log(number)
number = parseInt(strNumber)
console.log(number)
let value = Number(strNumber)
console.log(value)

console.log(value.toString())
console.log(value + '')
console.log("IsNaN('abc')", isNaN("abc"))

console.log(" 'x' + 'y':", "x" + "y")

let a = 3
let b = '0'
console.log(a + Number(b))
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(('1' + 0 ) * 3)

let n1 = 5.5
let n2 = 5.3
let n3 = 5.7

console.log(Math.floor(n3))
console.log(Math.ceil(n2))
console.log(Math.round(n1))

// Math.random() [0;1)
console.log(Math.random())

// roll a dive [1, 6]
function getDiveRandom() {
    return Math.floor(Math.random() * 6) + 1
}

function getRandom(start, end) {
    let random = end - start
    return start + Math.floor(Math.random() * (random  + 1))
}

let randomNumber = getDiveRandom()
console.log(randomNumber)
randomNumber = getRandom(10, 11)
console.log(randomNumber)

// 3.4567283$
x = 3.4567283123412341234
// x = 3.45
console.log("Round 2 fraction digits: ", x.toFixed(2), Math.round(x * 100)/100)