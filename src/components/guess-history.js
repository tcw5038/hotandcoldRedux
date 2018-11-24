import React from 'react';
import {connect} from 'react-redux';

export function GuessHistory(props) {
  if (typeof props.guessHistory !== 'undefined' && props.guessHistory.length > 0)
  {
    let guesses = props.guessHistory.map((guess, index) =>
    <li key={index}>
        {guess}
    </li>
    );
    return (
      <div>
        <p>Guess History:</p>
        <ul>
          {guesses}
        </ul>
      </div>
      
    );
  }  
  else {
    return (
      <ul>
        Make your first guess!
      </ul>
    );
  }
}
const mapStateToProps = state => ({guessHistory: state.guessHistory});

export default connect(mapStateToProps)(GuessHistory);

