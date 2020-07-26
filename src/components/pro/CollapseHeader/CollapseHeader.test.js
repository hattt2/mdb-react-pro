import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import CollapseHeader from './CollapseHeader';

const setup = (props = {}) => shallow(<CollapseHeader {...props} />);

describe('<CollapseHeader />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'collapse-header');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CollapseHeader />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      children: <test />,
      className: 'string',
      tagClassName: 'string',
      tag: 'string'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets tag', () => {
    wrapper = setup({ tag: 'section' }).children();
    checkTag(wrapper, 'section');
  });

  test('adds attributes', () => {
    wrapper = shallow(<CollapseHeader data-custom='test' />);
    expect(wrapper.find('[data-custom="test"]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds card-header class by default', () => {
      checkClass(wrapper, 'card-header');
    });

    test('adds custom class if className property === `custom`', () => {
      wrapper = setup({ className: 'custom' });
      checkClass(wrapper, 'custom');
    });

    test('adds mb-0 class property for tag by default', () => {
      checkClass(wrapper.children(), 'mb-0');
    });

    test('adds custom class if className property === `custom`', () => {
      wrapper = setup({ tagClassName: 'custom' });
      checkClass(wrapper.children(), 'custom');
    });
  });
});
