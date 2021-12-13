class Player {

    constructor(ctx, img, x, y, width, height) {
        this.ctx = ctx
        this.img = img
        this.x = x ? x : 0
        this.y = y ? y : 0
        this.width = width ? width : 100
        this.height = height ? height : 100
        this.step = 10
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveRight = () => {
        if (this.x + this.step <= screenWidth - this.width) {
            this.x += this.step
        }
    }

    moveLeft = () => {
        if (this.x - this.step >= 0) {
            this.x -= this.step
        }
    }

    moveUp = () => {
        this.y -= this.step
    }

    moveDown = () => {
        this.y += this.step
    }

}