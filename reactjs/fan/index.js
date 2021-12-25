
class Fan extends React.Component {
    constructor() {
        super()
        this.state = {
            rotateDeg: 0,
            speed: 0,
            maxSpeed: 100,
            status: "OFF"
        }
    }

    run = () => {
        this.runInterval = setInterval(() => {
            let { rotateDeg, speed } = this.state
            rotateDeg += speed
            if (rotateDeg >= 360) {
                rotateDeg = 0
            }
            this.setState({ rotateDeg })
        }, 10)
        clearInterval(this.speedDownInterval)
        this.speedUpInterval = setInterval(() => {
            let { speed, maxSpeed } = this.state
            if (speed < maxSpeed) {
                speed++
            } else {
                clearInterval(this.speedInterval)
                return
            }
            this.setState({ speed })
        }, 100)
    }

    imgStyle = () => ({ transform: `rotate(${this.state.rotateDeg}deg)` })

    turn = () => {
        let { status } = this.state
        if (status === "OFF") {
            status = "ON"
            this.run()
        } else {
            status = "OFF"
            this.stop()
        }
        this.setState({status})
    }

    stop = () => {
        clearInterval(this.speedUpInterval)
        this.speedDownInterval = setInterval(() => {
            let { speed } = this.state
            if (speed > 0) {
                speed--
            } else {
                clearInterval(this.runInterval)
                clearInterval(this.speedDownInterval)
                return
            }
            this.setState({ speed })
        }, 100)
    }

    render() {
        return (
            <div>
                <img style={this.imgStyle()} width="300" height='300' src="./images/fan.png" alt="" />
                <button onClick={this.turn}>{this.state.status === "ON" ? "OFF" : "ON"}</button>
            </div>
        )
    }
}

ReactDOM.render(<Fan />, document.getElementById("fan"));