const lodash = require('lodash');

const output = lodash.without([1, 2, 3], 3);
console.log(output);

exports.printMsg = () => {
    console.log('This is my first npm package.')
}
