import {SET_NEW_GUESS, setNewGuess} from './index'; 

//Redux action tests for setNewGuess action
describe('setNewGuess', () => {
    it('Should return the action', () => {
        const guess = 3;
        const action = setNewGuess(guess);
        expect(action.type).toEqual(SET_NEW_GUESS);
        expect(action.currentGuess).toEqual(guess);
    });
});

