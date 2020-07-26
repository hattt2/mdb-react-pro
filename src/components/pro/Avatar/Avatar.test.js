import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import Avatar from './Avatar';

const setup = (props = {}) => shallow(<Avatar {...props} />);

describe('<Avatar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'avatar');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'section',
      className: 'string',
      round: true,
      circle: true
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets custom tag', () => {
    wrapper = setup({ tag: 'section' });
    checkTag(wrapper, 'section');
  });

  describe('sets classes', () => {
    test('adds avatar class by default ', () => {
      checkClass(wrapper, 'avatar');
    });

    test('adds round class by default if round', () => {
      wrapper = setup({ round: true });
      checkClass(wrapper, 'rounded');
    });

    test('adds round class by default if circle ', () => {
      wrapper = setup({ circle: true });
      checkClass(wrapper, 'rounded-circle');
    });

    test('adds custom class ', () => {
      wrapper = setup({ className: 'test-class' });
      checkClass(wrapper, 'test-class');
    });
  });
});
