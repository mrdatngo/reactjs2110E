const store = {
    state: {
        counter: 0,
    },

    cbs: [],

    subscribe: function(cb) {
        this.cbs.push(cb)
    },

    public: function() {
        this.cbs.forEach(cb => {
            cb()
        });
    },

    getState: function() {
        return this.state
    },

    setState: function(state) {
        this.state = state
    }
}

// action
function increaseCounter() {
    let { counter } = store.getState()
    store.setState({ counter: counter + 1 })
    store.public()
}

function increaseCounterDelay() {
    setTimeout(() => {
        let { counter } = store.getState()
        store.setState({ counter: counter + 1 })
    }, 1000)
    store.public()
}

export { store, increaseCounter, increaseCounterDelay }
