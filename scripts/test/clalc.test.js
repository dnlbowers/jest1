const { TestWatcher } = require("jest");
const addition = require("../calc");

//things to try and test for : -
// no parameter
// Single missing parameter
// string in either or both parameter
// null in one or both parameters
//undefined as a parameter
// does it work with floats?
// does it work with negative numbers

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 +22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        
        test("should return 73 for 42 +31", () => {
            expect(addition(42, 31)).toBe(73);
        });

        test("no parameters should return an error", () => {
            expect(() => {
                addition();
            }).toThrow(Error)
        });
    });

    describe("Subtraction function", () => {

    });

    describe("Multiply function", () => {

    });

    describe("Division function", () => {

    });
});