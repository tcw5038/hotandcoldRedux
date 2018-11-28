import React from 'react';
import {connect} from 'react-redux';

export function GuessHistory(props) {
  if (typeof props.history !== 'undefined' && props.history.length > 0)
  {
    let guesses = props.history.map((guess, index) =>
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
const mapStateToProps = state => ({history: state.history});

export default connect(mapStateToProps)(GuessHistory);

