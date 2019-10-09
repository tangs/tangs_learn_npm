const lodash = require('lodash');

exports.printMsg = () => {
    const output = lodash.without([1, 2, 3], 3);
    console.log(output);
    console.log('This is my first npm package.')
}
