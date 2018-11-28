import React from 'react';
import { shallow } from 'enzyme';
import MainGame from './main-game';

describe('<MainGame />', () => {
    it('Renders without crashing', () => {
      shallow(<MainGame />);
    });
});
