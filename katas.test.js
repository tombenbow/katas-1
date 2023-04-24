import { addTwoNumbersTogether } from "./katas";

describe('addTwoNumbersTogether', () => {
    it('returns the sum of the two numbers entered into the function', () => {
        const result = addTwoNumbersTogether(2, 5);
        expect(result).toEqual(7);
    });
});