//calculator.test.js
const add = require("./calculator");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return number when only one number is int he string", () => {
	expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
	expect(add("1,2")).toBe(3);
});

it("should sumerize multiple numbers", () => {
	expect(add("1,2,3")).toBe(6);
});

it("should sumerize multiple numbers on , and new lines", () => {
	expect(add("1\n2,3")).toBe(6);
});

it("should return exception 'Negatives not allowed' and list all negative numbers in the list", () => {
	function throwError() {
		add("1,-2,3");
	}
	expect(throwError).toThrowError("Negatives not allowed: -2");
});

it("should return exception 'Negatives not allowed' and list all negative numbers in the list", () => {
	function throwError() {
		add("2,-4,3,-5");
	}
	expect(throwError).toThrowError("Negatives not allowed: -4,-5");
});
