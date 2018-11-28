import React from 'react';
import { shallow } from 'enzyme';
import {ShowHint} from './show-hint';

describe('<ShowHint />', () => {
    it('Renders without crashing', () => {
      shallow(<ShowHint />);
    });

    it('Renders a hint', () => {
      let resultHint = 'Make your first guess';
      let wrapper = shallow(<ShowHint resultHint={resultHint} />);
      expect(wrapper.contains(resultHint)).toEqual(true);
    });
});