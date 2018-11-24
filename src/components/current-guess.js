import React from 'react';
import {connect} from 'react-redux';

export function CurrentGuess(props) {
    return (
    <h2>
       {props.currentGuess}
    </h2>
  );
}

const mapStateToProps = state => ({currentGuess: state.currentGuess});


export default connect (mapStateToProps)(CurrentGuess)