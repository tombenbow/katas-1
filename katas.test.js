const {
  addTwoNumbersTogether,
  multiplyTwoNumbersTogether,
  isNumberEven,
  returnEvenNumbersOnly,
  returnFactorialOfANumber,
  returnFirstRepeatedCharacter,
  sortTwoArrays,
  returnIndexOfDigitsWhichEqualTarget,
  returnLargestPalindrome
} = require("./katas.js");

describe("addTwoNumbersTogether", () => {
  it("returns the total of the two numbers added together", () => {
    const result = addTwoNumbersTogether(2, 5);
    expect(result).toEqual(7);
  });
  it('doesnt return the word egg', () => {
    const result = addTwoNumbersTogether(9, 10)
    expect(result).not.toEqual("egg")
  });
});

//ToDo: make test pass
describe.skip("multiplyTwoNumbersTogether", () => {
  it("returns the total of two numbers multiplied by one another", () => {
    const result = multiplyTwoNumbersTogether(4, 5);
    expect(result).toEqual(10);
  });
});

//ToDo: finish other test in this describe block
describe.skip("isNumberEven", () => {
  it("returns true when passed even number", () => {
    const result = isNumberEven(2)
    expect(result).toBeTruthy()
    expec(result).toEqual(true)
  });
  it("returns false when passed odd number", () => {
    //finish test
  });
});

describe.skip('returnEvenNumbersOnly', () => {
    it('', () => {
        
    });
});

describe.skip('returnFactorialOfANumber', () => {
    it('', () => {
        
    });
});

describe.skip('returnFirstRepeatedCharacter', () => {
    it('', () => {
        
    });
});

describe.skip('sortTwoArrays', () => {
    it('', () => {
        
    });
});

describe.skip('returnIndexOfDigitsWhichEqualTarget', () => {
    it('', () => {
        
    });
});

describe.skip('returnLargestPalindrome', () => {
    it('', () => {
        
    });
});


