let slideShows = document.querySelectorAll(".slide-show-wrapper .slide-show")
let leftArrow = document.querySelector(".js-left-arrow")
let rightArrow = document.querySelector(".js-right-arrow")
let dots = document.querySelectorAll(".dot")

let curIndex = 0

leftArrow.addEventListener("click", () => {
    slide(-1)
})

rightArrow.addEventListener("click", () => {
    slide(+1)
})

function slide(step) {
    // remove active of current index
    slideShows[curIndex].classList.remove("active")
    // add active for next index
    curIndex += step
    // if (curIndex >= slideShows.length) {
    //     curIndex = 0
    // }
    // if (curIndex < 0) {
    //     curIndex = slideShows.length - 1
    // }
    curIndex = (curIndex + slideShows.length) % slideShows.length
    slideShows[curIndex].classList.add("active")
    clearInterval(slideShowInterval)
}

// setTimeout(() => {
//     alert("call after 1s")
// }, 3000)

let slideShowInterval = setInterval(() => {
    // alert("Call every 1s")
    // console.log("Call me!")
    slide(1)
}, 3000)

// handle with dots

function active(index) {
    slideShows[curIndex].classList.remove("active")
    curIndex = index
    slideShows[curIndex].classList.add("active")
}

Array.from(dots).forEach((dot, index) => {
    dot.addEventListener("click", () => {
        active(index)
    })
})

// for(let i = 0; i < dots.length; i++) {
//     dots[i].addEventListener("click", () => {
//         active(i)
//     })
// }
// console.log(i)