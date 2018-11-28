import {SET_NEW_GUESS, RESET_GAME} from '../actions';

const initialState = {
    num:Math.floor((Math.random() * 100) + 1),
    resultHint:'Make your first guess',
    history: []
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
            history:[...state.history, guess],
        });
    }
    else if(action.type === RESET_GAME){
        return {
            num:Math.floor((Math.random() * 100) + 1),
            resultHint:'Make your first guess',
            history: []
        };

    }

    return state;
};