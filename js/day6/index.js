let title = document.getElementById("title")
title.style.backgroundColor = "grey"
title.style.color = "white"

let pElems = document.getElementsByTagName("p")
console.log(typeof(pElems), Array.isArray(pElems))
// for(let i = 0; i < pElems.length; i++) {
//     let pElem = pElems[i]
//     pElem.style.color = "blue"
// }
let pElems2 = [ ...pElems ]
pElems2.forEach(pElem => {
    pElem.style.color = "blue"
});

// Array.from(pElems).forEach(pElem => {
//     pElem.style.color = "blue"
// });
console.log(pElems)

let pElemDescriptions = document.getElementsByClassName("description")
Array.from(pElemDescriptions).forEach(pElem => {
    pElem.style.color = "red"
});
console.log(pElemDescriptions)

// querySelector
// p .container .description

let pElem = document.querySelector(".container .description")
pElem.style.border = "1px solid black"

// change value
pElem.textContent = "<a> description </a>"
// pElem.innerHTML = `<a onclick="alert('test')"> description </a>`

pElems = document.querySelectorAll(".container .description")
Array.from(pElems).forEach(pElem => {
    pElem.style.fontSize = "30px"
})

document.querySelector(".js-input").value = "abc"

// create - update - remove
let divElem = document.createElement("div")
let h3Elem = document.createElement("h3")
pElem = document.createElement("p")

h3Elem.textContent = "Create Elems"
pElem.textContent = "Example create elem"

divElem.appendChild(h3Elem)
divElem.appendChild(pElem)

// document.body.appendChild(divElem)

// change approach
// update
document.querySelector(".container").classList.add("dark-theme")
document.querySelector(".container").classList.remove("dark-theme")
// create
document.getElementById("myContainer").style.display = "block"

// event handler
// <script> alert('hihi, you're hacked!') </script>
let btnElem = document.querySelector(".container .js-btn-click")
let inputElem = document.querySelector(".js-input")
let commentElem = document.querySelector(".js-comment")

btnElem.addEventListener("click", () =>{
    // alert("Click")
    // commentElem.textContent = inputElem.value
    commentElem.innerHTML = inputElem.value
})

btnElem.addEventListener("mouseover", () =>{
    // alert("mouseover")
})

btnElem.addEventListener("mouseout", () =>{
    // alert("mouseout")
})

inputElem.addEventListener("keydown", (event) => {
    // alert("Keydown")
    // console.log(event)
})

inputElem.addEventListener("input", (event) => {
    // alert("Keydown")
    console.log(event)
})

// btnElem.onclick = () =>{
//     alert("Click")
// }