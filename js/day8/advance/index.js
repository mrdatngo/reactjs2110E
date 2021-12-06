//// var let const
// const -- khai bao hang so

// re-declare
// var a = 3
// var a = 4

let a = 3
a = 4

// var global = 3

// var only scope in function
function test() {
    var local = 4
}

// {
//     var global = 4
//     let global2 = 5 // not global at all
// }

// if (true) {
//     var global = 4
// }
// use 'let' save memory

{
    // hoisting - error
    // console.log(global)
    var global = 4
    // let global = 4
}
// console.log(global)

//// closure

function genIDF() {
    let ID = 0 // closure
    return function() {
        return ++ID
    }
}

let genID = genIDF()
console.log(genID())
console.log(genID())
console.log(genID())
ID = 0
console.log(genID())

//// bind, apply, call
function say(name) {
    console.log(this.greeting ,": ", name)
}
// say("Nam")

let VN = {
    greeting: "Xin chào"
}

let EN = {
    greeting: "Hello"
}

say.bind(VN)("Nam")
say.bind(EN)("Nam")

say.apply(VN, ["Nam"])
say.apply(EN, ["Nam"])

say.call(VN, "Nam", 'parm2')
say.call(EN, "Nam")

//// import - export