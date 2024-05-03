// Your tests here
import {isPalindrome} from "../utils"

describe("isPalindrome", () => {
        it("should return true if word is a palindrome", () => {
            expect(isPalindrome("racecar")).toBe(true)
        });

        it("should return false if word is not a palindrome ", () => {
            expect(isPalindrome("hello")).toBe(false)
        });

        it("should return true for wirds with both uppercase and lowercase letters", () => {
            expect(isPalindrome("RaCeCaR")).toBe(true)
        });

        it("should return false for an empty string", () => {
            expect(isPalindrome("")).toBe(false)
        })

        it("throw an error if input is not a string", () => {
            expect(() => {
                isPalindrome(123)
        }).toThrow();
        });

        it("throw an error if input has non-alphabetic characters", () => {
            expect(() => {
                isPalindrome("123")
        }).toThrow();
        });
    });
