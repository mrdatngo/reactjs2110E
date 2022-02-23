class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            numberOfGuessed: 0
        }
    }

    increase = () => {
        this.setState({ numberOfGuessed: this.state.numberOfGuessed + 1 })
    }

    render() {
        const { numberOfGuessed } = this.state
        return <div>
            <Header numberOfGuessed={numberOfGuessed}></Header>
            <Main numberOfGuessed={numberOfGuessed} increase={this.increase}></Main>
        </div>
    }
}

class Header extends React.Component {
    render() {
        const { numberOfGuessed } = this.props
        return (
            <div className="jumbotron text-center" style={{ color: numberOfGuessed > 7 ? "red" : "black" }}>
                <h1>Guessing random number</h1>
                <p>I randomed a number between 1 to 100. Dare u guess it!!</p>
            </div>
        )
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randomedNumber: this.randomNumber(),
            // numberOfGuessed: 0,
            inputNumber: 50,
            message: ""
        }
    }

    randomNumber = () => {
        return Math.floor(Math.random() * 100) + 1
    }

    onInputChange = (event) => {
        let { value } = event.target
        let inputNumber = 0
        if (!Number.isNaN(Number(value))) {
            inputNumber = Number(value)
        }
        this.setState({ inputNumber })
    }

    guess = () => {
        let { inputNumber, randomedNumber } = this.state
        let { increase } = this.props
        let message = ""
        if (inputNumber > randomedNumber) {
            message = "Your number is bigger"
        } else if (inputNumber < randomedNumber) {
            message = "Your number is smaller"
        } else {
            alert("You Win!!!")
        }
        this.setState({ message, inputNumber: 0 })
        // how to call increase of Parent (Game)
        increase()
    }

    render() {
        const { message, inputNumber } = this.state
        const { numberOfGuessed } = this.props
        return (
            <div className="main">
                <button>New Game</button>
                <hr />
                <label htmlFor="">Number of guessed: </label> {numberOfGuessed}
                <br />
                <label htmlFor="">Input number: </label>
                <input type="number" value={inputNumber} onChange={this.onInputChange} />
                <button onClick={this.guess} className="btn-success">Guess</button>
                <p>{message}</p>
            </div>
        )
    }
}

ReactDOM.render(<Game />, document.getElementById("game"))