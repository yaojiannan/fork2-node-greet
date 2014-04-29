//var expect = require("chai").expect
var greet = require("greet")

describe('greet', function () {
	it ("should greet a person by name", function(){
		expect(greet("Yao")).to.eql("hello, Yao");
	});
});

describe('greet', function () {
	it ("should greet a person flirtatiously if drunk", function(){
		expect(greet("Yao","drunk")).to.eql("hello, Yao, you look sexy today");
	});
});
