//const math = require('math')

var math = {}

math.generateRandonNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = math