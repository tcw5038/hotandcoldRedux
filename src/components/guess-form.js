import React from 'react';
import {connect} from 'react-redux';
import {setNewGuess} from '../actions';


export class GuessForm extends React.Component {
    
    submitGuess(event) {
        event.preventDefault();
        const value = this.textInput.value;
        this.props.dispatch(setNewGuess(value));
        this.textInput.value = '';
	}

    render(){
        return(
            <form onSubmit={event => this.submitGuess(event)}>
                <input type="number" min={1} max={100} ref={input => this.textInput = input}/>
                <button type='submit' className='guessButton'>Guess!</button>
            </form>
        );
    }
};

export default connect()(GuessForm);