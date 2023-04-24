const addTwoNumbersTogether = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

const multiplyTwoNumbersTogether = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

//returns true if a number is even, false if it's odd
const isNumberEven = (number) => {

}

//given an array of numbers, return only the even ones i.e. [1, 2, 3, 4, 5] would return [2, 4]
const returnEvenNumbersOnly = (arrayOfNumbers) => {

}

//Return factorial of a number i.e. if passed 5, function will return 120 (5 * 4 * 3 * 2 * 1)
const returnFactorialOfANumber = (number) => {

}

//Given a string, return the first character to be repeated i.e. you would return "f" from the string "abcfdefcba"
const returnFirstRepeatedCharacter = (string) => {

}

//Given two arrays of numbers, return one array wich contains the numbers in both sorted from smallest to largest 
// i.e. if array1 = [3, 5, 9] and array2 = [22, 1, 7], return the array [1, 3, 5, 7, 9, 22]
const sortTwoArrays = (array1, array2) => {

}

//Given an array of a numbers, return the indexes of the numbers which hit the target when added together
//i.e. [1, 2, 3, 4, 5] and 8 should return [2, 4] as the numbers at indexes 2 (3) and 4 (5) equal 8.
const returnIndexOfDigitsWhichEqualTarget = (array, target) => {

}

//returns the longest word in a string that is spelt the same both ways
//i.e. "abba racecar tat anana" returns "racecar"
//to make harder - do without spaces in the input string i.e. "abbaracecartatanana" still returns "racecar" have added solution for this in solutions file
const returnLargestPalindrome = (string) => {

}

module.exports = {
    addTwoNumbersTogether,
    multiplyTwoNumbersTogether,
    isNumberEven,
    returnEvenNumbersOnly,
    returnFactorialOfANumber,
    returnFirstRepeatedCharacter,
    sortTwoArrays,
    returnIndexOfDigitsWhichEqualTarget,
    returnLargestPalindrome
}