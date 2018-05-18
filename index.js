

//deconstruct the allJokes function

const jokes = require('./lib/jokes/')
const {generateRandonNumber} = require('./lib/math')

var app = {}

app.config = {jokeTimeInterval: 1000}

app.printJoke = () => {
    var randomNumber = generateRandonNumber(1, jokes.allJokes().length)
    console.log(randomNumber)
    var joke = jokes.allJokes()[randomNumber-1]
    console.log(joke)
}

app.indefiniteloop = () => {
    setInterval(app.printJoke,app.config.jokeTimeInterval)
}

app.indefiniteloop()

