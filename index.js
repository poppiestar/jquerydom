
var jquery = require('jquery');
var jsdom = require('jsdom').jsdom;

var document = jsdom();

module.exports = jquery(document.parentWindow);

