greet = require("greet")

describe “greet”, ->
	it "should greet a person by name", ->
		expect(greet("Yao")).to.eql("hello, Yao")

	it "should greet a person flirtatiously if drunk", ->
		expect(greet("Yao", drunk=true)).to.eql("hello Yao, you look sexy today")

 