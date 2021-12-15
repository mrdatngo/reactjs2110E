//// Hello world

// let titleElem = React.createElement("h3", null, "Hello world")
// let desElem = React.createElement("p", null, "Lorem")
// let container = React.createElement("div", null, titleElem, desElem)

let title = "Hello ReactJS"

let container = (
    <div>
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem dolor neque voluptatem architecto qui optio ducimus unde repellat hic rem dolores at quia, ab, dolorem nostrum quasi quisquam consequatur est.</p>
    </div>
)

// let container = React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Hello world"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem dolor neque voluptatem architecto qui optio ducimus unde repellat hic rem dolores at quia, ab, dolorem nostrum quasi quisquam consequatur est."));

ReactDOM.render(container, document.getElementById("app"))

//// Clock

// setInterval(() => {
//     let timer = new Date().toLocaleTimeString();
//     let clockEm = <p>{timer}</p>;
//     let sideBar = <div></div>
// },1000)

class Clock extends React.Component {
    constructor(timer) {
        super()
        // this.timer = timer // later
        // this.timer = "x:xx:xx xx" // cannot re-render
        this.state = {
            timer: "x:xx:xx xx"
        }
        
        this.run()
    }

    run = () => {
        setInterval(() => {
            let timer = new Date().toLocaleTimeString();
            // this.timer = timer
            // this.state.timer = timer 
            // =>
            this.setState({
                timer: timer
            })
            // console.log(this.timer)
        }, 1000)
    }

    render() {
        console.log("Rendering....")
        return <p> { this.state.timer } </p>
    }
}

// <Clock /> replace for new Clock("x:xx:xx xx")
ReactDOM.render(<Clock />, document.getElementById("clock"));