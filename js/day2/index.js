// If else - cau dieu kien

let mark = 10
let studentName = "Huy"
// [0-5) Trung binh
// [5-8) Kha
// [8-10] Gioi

if (mark === 0 || studentName === "Huy") {
    mark = 9
}

// continue
if ((mark >= 0 && mark < 5) || studentName === "Huy") {
    console.log("TB")
} else if (mark >= 5 && mark < 8) {
    console.log("Kha")
} else if (mark >= 8 && mark <= 10) {
    console.log("Gioi")
} else {
    console.log(mark, " is unvalid mark")
}

// switch - case

let month = 4
// if (month === 1 || month === 2 || month === 3) {
//     console.log("Spring")
// } else if (month === 4 || month === 5 || month === 6) {
//     console.log("Summer")
// }

switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Spring")
        break
    case 4:
    case 5:
    case 6:
        console.log("Summer")
        break
}

//// loop
// for
for (let index = 0; index < 10; index++) {
    console.log(index + 1)
    if (index === 5) {
        break
    }
}

// let value = prompt("Enter a number: ", 0)
// console.log(value)
// let number = Number(value)

// while (isNaN(number)) {
//     let value = prompt("Enter a number: ", 0)
//     console.log(value)
//     number = Number(value)
// }




// while
let index = 0
while (index < 10) {
    // infinity loop
    index++
    console.log(index)
}

// shouldn't do this
// for(;;) {
//     console.log("I love you!!!!")
// }

//// Enter a number and check that number is Prime or not

do {
    let value = prompt("Enter a number: ", 0)
    console.log(value)
    number = Number(value) 
} while (isNaN(number))

console.log(number)

if (number < 2) {
    console.log("Not prime")
} else {
    let count = 0
    for(let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++
        }
    }
    if (count === 2) {
        console.log("Prime")
    } else {
        console.log("Not prime")
    }
}