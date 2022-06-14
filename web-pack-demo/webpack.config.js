// const path = require('path');

// module.exports = {
//     entry: {
//         app: './src/index.js'
//     },
//     output: {
//         filename: '[name].js',
//         path: path.join(__dirname, 'dist')
//     }
// }

const path = require('path');

var config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist')
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development')
        config.output.filename = 'app.dev.js'
    if (argv.mode === 'peoduction')
        config.output.filename = '[name].js'
    return config;
}