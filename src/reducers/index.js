import {SET_NEW_GUESS} from '../actions';

const initialState = {
    num:Math.floor((Math.random() * 100) + 1),//returns a random number between 1 and 100
    resultHint:'Make your first guess',
    currentGuess: null,//remember to ask whether null works here or whether I should have something else
    guessHistory: []
};


export const hotColdReducer = (state=initialState, action) => {
    if(action.type === SET_NEW_GUESS){//if a user makes a new guess
        let resultHint;
        let guess = action.currentGuess;
        let difference = Math.abs(guess-state.num);
        if(difference === 0){
            resultHint = 'You guessed right!';
        }
        else if (difference <= 5){
            resultHint = 'Getting pretty hot!';
        }
        else if (difference <= 10){
            resultHint = 'Warm, but not quite there';
        }
        else{
            resultHint = 'Still cold';
        }

        console.log(guess);
        console.log(resultHint);

        return Object.assign({}, state, {
            resultHint:resultHint,
            guessHistory:[...state.guessHistory, guess],
            currentGuess: guess
        });
    }

    return state;
};