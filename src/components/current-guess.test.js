import React from 'react';
import { shallow, mount } from 'enzyme';
import {CurrentGuess} from './current-guess';
//import MainGame from './main-game';
//import Provider from '../index.js';

describe('<CurrentGuess />', () => {
    it('Renders without crashing', () => {
      shallow(<CurrentGuess  />);
    });
    
    it('Renders the current guess', () => {
        const currentGuess = 50;
        const wrapper = mount(<CurrentGuess currentGuess={currentGuess}/>);
        expect(wrapper.text()).toEqual('50');
    });
    
});