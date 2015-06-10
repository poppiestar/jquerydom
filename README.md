jQueryDOM
=========

While I was looking at ways to test components for my component library, I spent
a long time coming up with a way to build a DOM I could test against using jQuery.
There's probably another, easier way to do this, but found this to be quite an
elegant solution.

I've been using this module in Jasmine tests, but I can't imagine why it wouldn't
work with your favourite test framework.

Usage
-----

Require the module in your test file. The module itself returns a jQuery object that
is tied to an instance of JSDom.

    var $ = require('jquerydom');

You can now use the $ variable as you would jQuery as usual.

For example, if you wanted to add some HTML do the DOM you'd do this and it will work
as expected:

    var output = $('<p class="test">This is a test</p>');

You could conceivably do this in your test:

    expect( output.find('p').hasClass('test') ).toBe(true);

Hopefully this is handy to someone else.

