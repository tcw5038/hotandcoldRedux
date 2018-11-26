import {hotColdReducer} from './index';
import {setNewGuess} from '../actions';

describe('hotColdReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = hotColdReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            num:Math.floor((Math.random() * 100) + 1), //test fails because of this random number generator
            resultHint:'Make your first guess',
            currentGuess: null,
            guessHistory: []
        });
    });
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = hotColdReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
});

describe('setNewGuess', () => {
    it('Should make a new guess', () => {
        let state = {
            num: 50,
            guessHistory:[],
            resultHint: '',
            currentGuess:null
        };
        state = hotColdReducer(state, setNewGuess(25));
        expect(state.guessHistory).toEqual([25]);
        expect(state.currentGuess).toEqual(25);
        expect(state.resultHint).toEqual('Still cold');

        state = hotColdReducer(state, setNewGuess(50));
        expect(state.guessHistory).toEqual([25, 50]);
        expect(state.currentGuess).toEqual(50);
        expect(state.resultHint).toEqual('You guessed right!');
    });

});
