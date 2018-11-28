import React from 'react';

import GuessForm from './guess-form';
import ShowHint from './show-hint';
import CurrentGuess from './current-guess';
import GuessHistory from './guess-history';

export default class MainGame extends React.Component{
render(){
    return(
        <div>
            <h1>Hot or Cold React Challenge</h1>
            <p>Guess a number between 1 and 100</p>
            <GuessForm />
            <ShowHint />
            <CurrentGuess />
            <GuessHistory />
        </div>
    );
  }
}

//export default connect(mapStateToProps)(MainGame);
