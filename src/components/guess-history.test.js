import React from 'react';
import { shallow } from 'enzyme';
import {GuessHistory} from './guess-history';

describe('<GuessHistory />', () => {
    it('Renders without crashing', () => {
      shallow(<GuessHistory />);
    });

    it('Renders a list of guesses', () => {
      const values = [10, 24, 52];
      const wrapper = shallow(<GuessHistory history={values} />);
      const items = wrapper.find('li');
      expect(items.length).toEqual(values.length);
      values.forEach((value, index) => {
        expect(items.at(index).text()).toEqual(value.toString());
      });
    });
});