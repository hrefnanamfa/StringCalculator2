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

it("should sumerize multiple numbers", () => {
	expect(add("4,10,6")).toBe(20);
});

it("should sumerize multiple numbers on , and new lines", () => {
	expect(add("1\n2,3")).toBe(6);
});

it("should sumerize multiple numbers on , and new lines", () => {
	expect(add("1\n4\n5")).toBe(10);
});

it("should return exception 'Negatives not allowed:' and list all negative numbers", () => {
	function throwError() {
		add("-1,2");
	}
	expect(throwError).toThrowError("Negatives not allowed: -1");
});

it("should return exception 'Negatives not allowed:' and list all negative numbers", () => {
	function throwError() {
		add("1,-2,3");
	}
	expect(throwError).toThrowError("Negatives not allowed: -2");
});

it("should return exception 'Negatives not allowed:' and list all negative numbers", () => {
	function throwError() {
		add("2,-4,3,-5");
	}
	expect(throwError).toThrowError("Negatives not allowed: -4,-5");
});

it("should ignore numbers bigger than 1000", () => {
	expect(add("1001,2")).toBe(2);
});

it("should ignore numbers bigger than 1000", () => {
	expect(add("1000,2")).toBe(1002);
});

it("should ignore numbers bigger than 1000", () => {
	expect(add("100000\n2")).toBe(2);
});

it("should ignore numbers bigger than 1000", () => {
	expect(add("999,2")).toBe(1001);
});

it("should split numbers with given delimiter", () => {
	expect(add("//;\n1;2")).toBe(3);
});

it("should split numbers with given delimiter", () => {
	expect(add("//!\n1!2!3!4")).toBe(10);
});
