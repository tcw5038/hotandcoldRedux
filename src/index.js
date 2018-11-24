import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainGame from './components/main-game'
import store from './store';
import './App.css';

//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
      <MainGame />
    </Provider>,
    document.getElementById('root')
  );

