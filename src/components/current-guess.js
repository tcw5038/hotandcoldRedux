import React from 'react';
import {connect} from 'react-redux';

export function CurrentGuess(props) {
  let lastGuess = '';
  if (props.history.length){
    lastGuess = props.history[props.history.length-1];
  }
    return (
    <h2>
       {props.currentGuess}
    </h2>
  );
}

const mapStateToProps = state => ({history: state.history});


export default connect (mapStateToProps)(CurrentGuess)