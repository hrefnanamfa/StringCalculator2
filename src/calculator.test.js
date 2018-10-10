//calculator.test.js
const calculator = require('./calculator');

test("Returns greeting with name and states it's the calculator", () =>{
	expect(calculator("Namfa")).toBe("Hello, Namfa! This is the calculator");
});