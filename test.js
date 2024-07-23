import { capitalize } from "./capitalize.js";
import { reverseString } from "./reverseString.js";
import { calculator } from "./calculator.js";


// tests for capitalize.js
test("Capitalizes the first letter", () => {
    expect(capitalize('hello')).toBe('Hello');
});

test("Capitalizes the first letter", () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test("Capitalizes the first letter", () => {
    expect(capitalize('words')).toBe('Words');
});

// tests for reverseString.js
test("Reverses the string", () => {
    expect(reverseString('hello')).toBe('olleh');
});

test("Reverses the string", () => {
    expect(reverseString('Hello, world')).toBe('dlrow ,olleH');
});

// tests for calculator.js
test("Adds a and b", () => {
    expect(calculator.add(6, 3)).toBe(9);
});

test("Subtracts a and b", () => {
    expect(calculator.subtract(6, 3)).toBe(3);
});

test("Multiplies a and b", () => {
    expect(calculator.multiply(6, 3)).toBe(18);
});

test("Divides a and b", () => {
    expect(calculator.divide(6, 3)).toBe(2);
});
