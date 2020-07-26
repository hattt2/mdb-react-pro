import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import CardUp from './CardUp';

const setup = (props = {}) => shallow(<CardUp {...props} />);

describe('<CardUp />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'card-up');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardUp />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'section'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets tag', () => {
    wrapper = setup({ tag: 'section' });
    checkTag(wrapper, 'section');
  });

  test('adds attributes', () => {
    wrapper = shallow(<CardUp data-custom='test' />);
    expect(wrapper.find('[data-custom="test"]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds card-up class by default', () => {
      checkClass(wrapper, 'card-up');
    });

    test('adds custom class if className property === `custom`', () => {
      wrapper = setup({ className: 'custom' });
      checkClass(wrapper, 'custom');
    });

    test('adds color class property if color=`red`', () => {
      wrapper = setup({ color: 'red' });
      checkClass(wrapper, 'red-color');
    });

    test('adds gradient class property if gradient=`aqua`', () => {
      wrapper = setup({ gradient: 'aqua' });
      checkClass(wrapper, 'aqua-gradient');
    });
  });
});
