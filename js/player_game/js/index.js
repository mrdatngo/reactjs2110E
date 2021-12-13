var c = document.getElementById("playerGame");
var ctx = c.getContext("2d");

var img = document.createElement("img")
img.src = "./images/player.png"

let screenWidth = 500
let screenHeight = 500

function fillBackground() {
    ctx.fillStyle = "#e6e3e3"
    ctx.fillRect(0, 0, 500, 500);
}


let player = new Player(ctx, img, 100, 50)
window.onload = function () {
    setInterval(() => {
        // fps (frame per second!)
        fillBackground()
        player.draw()
    }, 10);
};

function initEventHandler() {
    document.addEventListener("keydown", (event) => {
        let key = event.key
        switch (key) {
            case "ArrowRight":
                player.moveRight()
                break;
            case "ArrowLeft":
                player.moveLeft()
                break;
            case "ArrowUp":
                player.moveUp()
                break;
            case "ArrowDown":
                player.moveDown()
                break;
        }
    })
}

initEventHandler()

// setTimeout(() => {
//     // fillBackground()
//     player.moveRight()
//     // player.draw()
// }, 2000)
