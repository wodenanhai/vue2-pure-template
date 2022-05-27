const px2rem = require('postcss-plugin-px2rem');

const postcss = px2rem({
    rootValue: 14,
    exclude: /(node_modules)/,
    selectorBlackList: ['.px2rem-ignore']
});

module.exports = {
    plugins: [
        postcss
    ]
}
