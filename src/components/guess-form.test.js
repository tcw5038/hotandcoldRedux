import React from 'react';
import { shallow, mount } from 'enzyme';
import {setNewGuess} from '../actions'
import {GuessForm} from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
      shallow(<GuessForm />);
    });
      it('Should call setNewGuess when the form is submitted', () => {//
        const dispatch = jest.fn();//creates a mock callback function
        const wrapper = mount(<GuessForm dispatch={dispatch} />);//gives setNewGuess a value of our created mock callback
        const value = 10;
        const input = wrapper.find('input[type="number"]');//jQuery find method to find the number input
        input.instance().value = 10;//sets the value to 10
        wrapper.simulate('submit');//simulates submission of the form
        expect(dispatch).toHaveBeenCalledWith(setNewGuess(value.toString()));//checks to see if our callback used our value of 10
      });

      it('Should reset the input when the form is submitted', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch}/>);
        const input = wrapper.find('input[type="number"]');//finds the number input type and sets it to input
        input.instance().value = 10;//adds a value of 10 to the declared input
        wrapper.simulate('submit');//simulates submission of the form
        expect(input.instance().value).toEqual('');//expects the input to be reset to an empty string afterward
      });
    });

