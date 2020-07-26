import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import Chip from './Chip';

const setup = (props = {}) => shallow(<Chip {...props} />);

describe('<Chip />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'string',
      className: 'string',
      size: 'string',
      bgColor: 'string',
      text: 'string',
      gradient: 'string',
      src: 'string',
      alt: 'string',
      close: true,
      handleClose: () => {}
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
    wrapper = shallow(<Chip data-custom='test' />);
    expect(wrapper.find('[data-custom="test"]').length).toBe(1);
  });

  test('invokes onClick callback', () => {
    const cb = jest.fn();
    wrapper = setup({ handleClose: cb, close: true });

    const fa = wrapper.find('Fa');
    fa.simulate('click');

    expect(cb).toBeCalled();
  });

  describe('renders', () => {
    test('renders', () => {
      const renders = findByTestAttr(wrapper, 'chip');
      expect(renders.length).toBe(1);
    });

    test('renders without errors', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Chip />, div);
    });

    test('renders img if src === link (&& alt="image")', () => {
      wrapper = setup({ src: 'link' });
      expect(wrapper.find('img[src="link"]').length).toBe(1);
      wrapper = setup({ src: 'link', alt: 'image' });
      expect(wrapper.find('img[src="link"][alt="image"]').length).toBe(1);
    });

    test('renders children', () => {
      wrapper = shallow(
        <Chip>
          <span>test</span>
        </Chip>
      );
      expect(wrapper.find('span').length).toBe(1);
    });

    test('renders close Icon if close === true', () => {
      wrapper = setup({ close: true });
      expect(wrapper.find('Fa').length).toBe(1);
    });
  });

  describe('sets classes', () => {
    test('sets chip class by default', () => {
      checkClass(wrapper, 'chip');
    });

    test('adds custom class if className property === `custom`', () => {
      wrapper = setup({ className: 'custom' });
      checkClass(wrapper, 'custom');
    });

    test('sets chip-lg class if size=`lg`', () => {
      wrapper = setup({ size: 'lg' });
      checkClass(wrapper, 'chip-lg');
    });

    test('sets red class if bgColor=`red`', () => {
      wrapper = setup({ bgColor: 'red' });
      checkClass(wrapper, 'red');
    });

    test('sets indigo-text class if text=`indigo`', () => {
      wrapper = setup({ text: 'indigo' });
      checkClass(wrapper, 'indigo-text');
    });

    test('sets gradient class property if gradient=`aqua`', () => {
      wrapper = setup({ gradient: 'aqua' });
      checkClass(wrapper, 'aqua-gradient');
    });

    test('sets Ripple-parent class if !!waves`', () => {
        wrapper = setup({ waves: true });
        checkClass(wrapper, 'Ripple-parent');
      });
  });
});
