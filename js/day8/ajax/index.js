let totolCaseElem = document.querySelector(".js-total-cases")
let deathsElem = document.querySelector(".js-deaths")
let recoveredElem = document.querySelector(".js-recovered")
let btnRefreshElem = document.querySelector(".js-btn-refresh")

console.log(totolCaseElem, deathsElem, recoveredElem, btnRefreshElem)

// promise
// btnRefreshElem.addEventListener("click", () => {
//     getData("https://api.covid19api.com/summary")
//         .then(dataObj => {
//             console.log(dataObj)
//             let totalConfirmed = dataObj.Global.TotalConfirmed
//             let totalDeaths = dataObj.Global.TotalDeaths
//             let totalRecovered = dataObj.Global.TotalRecovered
//             totolCaseElem.textContent = totalConfirmed
//             deathsElem.textContent = totalDeaths
//             recoveredElem.textContent = totalRecovered
//         })
// })
// async/await
btnRefreshElem.addEventListener("click", async () => {
    let dataObj = await getData("https://api.covid19api.com/summary")
    let totalConfirmed = dataObj.Global.TotalConfirmed
    let totalDeaths = dataObj.Global.TotalDeaths
    let totalRecovered = dataObj.Global.TotalRecovered
    totolCaseElem.textContent = totalConfirmed
    deathsElem.textContent = totalDeaths
    recoveredElem.textContent = totalRecovered
})

// function loadData() {
//     // XMLHttpRequest, http, fetch
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         let dataObj = JSON.parse(this.responseText)
//         let totalConfirmed = dataObj.Global.TotalConfirmed
//         let totalDeaths = dataObj.Global.TotalDeaths
//         let totalRecovered = dataObj.Global.TotalRecovered
//         totolCaseElem.textContent = totalConfirmed
//         deathsElem.textContent = totalDeaths
//         recoveredElem.textContent = totalRecovered
//     }
//     xhttp.open("GET", "https://api.covid19api.com/summary");
//     xhttp.send();
// }

function getData(apiUrl) {
    return new Promise(resolve => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            let dataObj = JSON.parse(this.responseText)
            resolve(dataObj)
        }
        xhttp.open("GET", apiUrl);
        xhttp.send();
    })
}