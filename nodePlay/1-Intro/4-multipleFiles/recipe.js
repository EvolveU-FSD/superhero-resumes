const ingredients = require('./ingredient')
const {getFlour}  = require('./ingredient')

console.clear()
console.log('Got', ingredients.getFlour(1.5))
console.log('Got', getFlour(2))
