
function cookingRice() {
    return new Promise((resolve, reject) => {
        console.log("Cooking rice")
        setTimeout(() => {
            console.log("Cooking rice done!")
            resolve()
        }, 1000)
    })
}

function cookingSoup() {
    return new Promise((resolve) => {
        console.log("Cooking soup")
        setTimeout(() => {
            console.log("Cooking soup done!")
            resolve()
        }, 2000)
    })
}

function cookingFish() {
    return new Promise((resolve, reject) => {
        console.log("Cooking fish")
        setTimeout(() => {
            console.log("Cooking fish done!")
            resolve()
            // reject({reason: "fish failed!"})
        }, 1000)
    })
}

// function cooking() {
//     // cookingRice()
//     // cookingSoup()
//     // cookingFish()
//     // => continuous
//     // promise hell
//     cookingRice().then(() => {
//         return cookingSoup()
//     }).then(() => {
//         return cookingFish()
//     })
// }

async function cooking() {
    try {
        await cookingFish()
        await cookingRice()
        await cookingSoup()
        // throw new Error("Test!")
    } catch(e) {
        console.log(e)
    }
}

cooking()

// find lover
let passed = true
let foundLover = false

const buyIphoneP = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (passed) {
            resolve({
                model: 13,
                color: "red",
            })
        } else {
            reject({
                reason: "Too expensive"
            })
        }
    }, 3000)
})

const findLover = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (foundLover) {
                resolve()
            } else {
                reject({ reason: "not found!" })
            }
        }, 1000)
    })
}

// console.log("main thread")
// buyIphoneP
//     .then((data) => {
//         console.log(buyIphoneP, data)
//         console.log("Done!")
//         return findLover()
//     })
//     .then(() => {
//         console.log("Found lover")
//         // return haveChild()
//     })
//     // .then(() => {
//     // })
//     .catch((err) => {
//         console.log(err)
//         console.log("Done!")
//         console.log("All done!")
//     })
//     .finally(() => {
//         console.log("All done!")
//     })
// console.log("main thread")

// console.log(buyIphoneP)
// setTimeout(() => {
//     console.log(buyIphoneP)
// }, 4000)
