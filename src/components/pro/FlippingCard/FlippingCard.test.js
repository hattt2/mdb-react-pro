import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import FlippingCard from './FlippingCard';

const setup = (props = {}) => shallow(<FlippingCard {...props} />);

describe('<FlippingCard />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'flipping-card');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlippingCard />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'string',
      innerTag: 'string',
      className: 'string',
      children: <test />,
      flipped: true
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

  test('sets inner tag', () => {
    wrapper = setup({ innerTag: 'section' });
    checkTag(wrapper.children(), 'section');
  });

  test('adds attributes', () => {
    wrapper = shallow(<FlippingCard data-custom='test' />);
    expect(wrapper.find('[data-custom="test"]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds card-wrapper class by default', () => {
      checkClass(wrapper, 'card-wrapper');
    });

    test('sets card-rotating effect__click classes by default', () => {
      checkClass(wrapper.children(), 'card-rotating.effect__click');
    });

    test('sets flipped class if props.flipped === true', () => {
      wrapper = setup({ flipped: true });
      checkClass(wrapper, 'flipped');
    });

    test('adds custom className for InnerTag', () => {
      wrapper = setup({ className: 'custom' });
      checkClass(wrapper.children(), 'custom');
    });
  });
});
