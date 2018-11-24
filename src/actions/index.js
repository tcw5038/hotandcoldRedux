export const SET_NEW_GUESS = 'SET_NEW_GUESS';
export const setNewGuess = currentGuess => ({
    type: SET_NEW_GUESS,
    currentGuess
});