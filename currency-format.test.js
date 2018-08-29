const Currency = require('./currency-format')

console.assert(Currency() === undefined, 'Don`t throw error when not found Currency')
console.assert(Currency('') === undefined, 'Don`t throw error when not found Currency')
console.assert(Currency([]) === undefined, 'Don`t throw error when not found Currency')
console.assert(Currency({}) === undefined, 'Don`t throw error when not found Currency')

console.assert(typeof Currency('USD') === 'object', 'Return Currency object when find by uppercase code')
console.assert(typeof Currency('usd') === 'object', 'Return Currency object when find by lowercase code')
console.assert(typeof Currency('$') === 'object', 'Return Currency object when find by symbol')

console.assert(JSON.stringify(Currency('€')) === JSON.stringify(Currency('EUR')))
console.assert(JSON.stringify(Currency('€')) === JSON.stringify(Currency('Euro')))