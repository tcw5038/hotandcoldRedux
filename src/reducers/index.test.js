import {hotColdReducer} from './index';
import {setNewGuess} from '../actions';

describe('hotColdReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = hotColdReducer(undefined, {type: '__UNKNOWN'});//hotColdReducer takes 2 arguments in this case: an undefined state and an unknown action
        const correctNum = state.num;
        expect(state).toEqual({
            num:correctNum,
            resultHint:'Make your first guess',
            history: []
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
            history:[],
            resultHint: '',
        };
        state = hotColdReducer(state, setNewGuess(25));
        expect(state.history).toEqual([25]);
        expect(state.resultHint).toEqual('Still cold');

        state = hotColdReducer(state, setNewGuess(50));
        expect(state.history).toEqual([25, 50]);
        expect(state.resultHint).toEqual('You guessed right!');
    });

});
