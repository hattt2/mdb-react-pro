import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import ChipsInput from './ChipsInput';

const setup = (props = {}) => shallow(<ChipsInput {...props} />);
const mounted = (props = {}) => mount(<ChipsInput {...props} />);

describe('<ChipsInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'chips-input');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChipsInput />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'string',
      className: 'string',
      placeholder: 'string',
      secondaryPlaceholder: 'string',
      chipSize: 'string',
      chipColor: 'string',
      chipText: 'string',
      chipGradient: 'string'
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
    wrapper = shallow(<ChipsInput data-custom='test' />);
    expect(wrapper.find('[data-custom="test"]').length).toBe(1);
  });

  describe('invoke callback of methods', () => {
    test('invoke handleclick() ', () => {
      wrapper = mounted();
      wrapper.simulate('click');
      expect(wrapper.state('isTouched')).toEqual(true);
    });

    test('invoke handleBackspace(e) ', () => {
      wrapper = mounted();
      wrapper.setState({
        chipsList: ['test', 'test2', 'test3'],
        isReadyToDelete: true
      });

      wrapper.simulate('keyUp', {
        which: 8
      });
      expect(wrapper.state('chipsList')).toEqual(['test', 'test2']);
    });

    test('invoke handleEnter() on input', () => {
      wrapper = mounted().setState({ chipsList: ['test', 'test2'] });
      const input = wrapper.find('input');
      input.simulate('keyUp', { which: 13 });

      expect(wrapper.state('chipsList')).toEqual(['test', 'test2']);

      input.simulate('change', { target: { value: 'setValue' } });
      input.simulate('keyUp', { which: 13 });

      expect(wrapper.state('chipsList')).toEqual(['test', 'test2', 'setValue']);
    });

    test('invoke handleChange() on input', () => {
      wrapper = mounted();
      const input = wrapper.find('input');
      expect(wrapper.state('inputValue')).toEqual('');

      input.simulate('change', {
        target: {
          value: 'test'
        }
      });

      expect(wrapper.state('inputValue')).toEqual('test');
    });

    test('invoke handleOutsideClick() on input', () => {
      wrapper = mounted().setState({ isTouched: true });
      const input = wrapper.find('input');
      expect(wrapper.state('inputValue')).toEqual('');

      input.simulate('blur');

      expect(wrapper.state('isTouched')).toEqual(false);
    });

    test('invoke handleAdd() on input', () => {
      const cb = jest.fn();
      wrapper = mounted({ handleAdd: cb }).setState({ chipsList: ['test', 'test2'] });
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: 'setValue' } });
      input.simulate('keyUp', { which: 13 });
      expect(cb).toHaveBeenCalledTimes(1);
    });


  });

  describe('sets classes', () => {
    test('sets chips class by default', () => {
      checkClass(wrapper, 'chips');
    });

    test('adds custom class if className property === `custom`', () => {
      wrapper = setup({ className: 'custom' });
      checkClass(wrapper, 'custom');
    });

    test('sets focus class if isTouched:state=true', () => {
      wrapper.setState({ isTouched: true });
      checkClass(wrapper, 'focus');
    });

    test('sets input class by default for input', () => {
      checkClass(wrapper.find('input'), 'input');
    });
  });
});
