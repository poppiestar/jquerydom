
var jquery = require('jquery');
var jsdom = require('jsdom').jsdom;

module.exports = jquery(jsdom().parentWindow);

