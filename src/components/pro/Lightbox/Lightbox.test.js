import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import Lightbox from './Lightbox';

const setup = (props = {}) => shallow(<Lightbox {...props} />);
const mounted = (props = {}) => mount(<Lightbox {...props} />);

describe('<Lightbox />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const Lightbox = findByTestAttr(wrapper, 'light-box');
    expect(Lightbox.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Lightbox />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      images: [],
      noMargins: true,
      className: 'test',
      itemClassName: 'test',
      marginSpace: 100,
      lg: '1',
      md: '1',
      sm: '1',
      size: '1',
      xl: '1',
      xs: '1',
      transition: 500
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  describe('callback functions', () => {
    test('invokes onScroll callback onLoad page', () => {
      wrapper.instance().setScreenSize();
      expect(wrapper.state('screenSize').x).toBeGreaterThan(1);
      expect(wrapper.state('screenSize').y).toBeGreaterThan(1);
    });

    test('invokes reset() callback if close modal', () => {
      const def = {
        activeKey: null,
        changeSlide: false,
        dragImg: false,
        dragImgPos: {},
        dragPercent: 0,
        galleryImagesData: [],
        imgSrc: null,
        imgSrcData: null,
        resize: false,
        resizePos: {
          x: 0,
          y: 0
        },
        scale: 0,
        scaleWheel: false,
        screenSize: {
          x: window.innerWidth,
          y: window.innerHeight
        },
        sliderOpened: false,
        zoomedScale: 0,
        showLeft: false,
        showRight: false
      };

      const expectedProps = {
        activeKey: 2,
        changeSlide: true,
        dragImg: false,
        dragImgPos: {
          x: 10,
          y: 20
        },
        dragPercent: 20,
        galleryImagesData: [{}, {}],
        imgSrc: 'src',
        imgSrcData: null,
        resize: false,
        resizePos: {
          x: 10,
          y: 10
        },
        scale: 1,
        scaleWheel: false,
        screenSize: {
          x: 10,
          y: 20
        },
        sliderOpened: true,
        zoomedScale: 2
      };

      wrapper.setState(expectedProps);
      wrapper.setState(wrapper.instance().reset());
      expect(wrapper.state()).toEqual(def);
    });

    test('invokes onScroll callback if onClick image', () => {
      wrapper = mounted({
        images: [{ src: 'img' }]
      });
      wrapper
        .find('img')
        .first()
        .simulate('click');

      expect(wrapper.state('galleryImagesData').length).toBe(1);
    });

    test('invokes setScale callback on load page', () => {
      wrapper.setState({
        imgSrcData: {
          realW: 200,
          realH: 300,
          size: {
            height: 150,
            window: 100
          }
        }
      });
      expect(wrapper.instance().setScale(wrapper.state('imgSrcData'))).toBe(
        0.5
      );
    });

    test('invokes setData callback if lightbox is opened', () => {
      wrapper = mounted({
        images: [{ src: 'img' }]
      });
      wrapper
        .find('img')
        .first()
        .simulate('click');

      expect(wrapper.state('imgSrc')).not.toBe(null);
    });

    test('invokes zoom(e) callback if onClick image', () => {
      wrapper = mounted({
        images: [{ src: 'img' }]
      });
      wrapper
        .find('img')
        .first()
        .simulate('click');

      expect(wrapper.state('activeKey')).toEqual(0);
    });

    test('invokes closeZoom callback if lightbox is opened and onClick close button', () => {
      wrapper = mounted({
        images: [{ src: 'img' }]
      });

      wrapper
        .find('img')
        .first()
        .simulate('click');
      wrapper.setState({ sliderOpened: true });

      wrapper.find('Button.pswp__button--close').simulate('click');
      expect(wrapper.state('sliderOpened')).toEqual(false);
    });

    test('invokes onScroll callback if lightbox is opened', () => {
      wrapper = mounted({ images: [{ src: 'img' }] });
      const img = wrapper.find('img').first();

      img.target = {
        tagName: 'IMG',
        style: {
          transform: 'translate(-50%, -50%) translate3d(0px, 0px, 0px) scale(1)'
        }
      };
      const spy = jest.spyOn(wrapper.instance(), 'scrollZoom');
      wrapper.instance().scrollZoom(img);
      expect(spy).toHaveBeenCalled();
    });

    test('invokes changeSlide callback', () => {
      wrapper = mounted({
        images: [{ src: 'img' }, { src: 'img2' }]
      });
      wrapper
        .find('img')
        .first()
        .simulate('click');
      wrapper.instance().changeSlide('next');

      expect(wrapper.state('changeSlide')).toEqual(true);
    });

    test('invokes dragStart callback onMouseDown', () => {
      wrapper = mounted({
        images: [{ src: 'img' }, { src: 'img2' }]
      });

      wrapper
        .find('img')
        .first()
        .simulate('click');

      wrapper.setState({ changeSlide: true });
      expect(wrapper.state('changeSlide')).toEqual(true);

      wrapper
        .find('img')
        .first()
        .simulate('mousedown');
      expect(wrapper.state('changeSlide')).toEqual(false);
    });

    test('invokes dragStop callback onDrag', () => {
      wrapper = mounted({ images: [{ src: 'img' }] });
      const spy = jest.spyOn(wrapper.instance(), 'dragStop');
      wrapper.instance().dragStop();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('sets classes', () => {
    test('adds mdb-lightbox class by default', () => {
      checkClass(wrapper, 'mdb-lightbox', 2);
    });

    test('adds d-flex flex-wrap classes for gallery by default', () => {
      const gallery = wrapper.children().last();
      checkClass(gallery, 'd-flex.flex-wrap');
    });

    test('adds no-margin class for gallery by default', () => {
      const gallery = wrapper.children().last();
      checkClass(gallery, 'no-margin');
    });

    test('adds custom class for gallery item', () => {
      setup({ itemClassName: 'test' })
        .children()
        .last()
        .children()
        .map(item => {
          return checkClass(item, 'test');
        });
    });

    test('adds overlay class for overlay by default', () => {
      const gallery = wrapper.children().first();
      checkClass(gallery, 'overlay');
    });

    test('adds custom class for description item', () => {
      setup({ descriptionClassName: 'test' })
        .children()
        .last()
        .children()
        .map(item => {
          return checkClass(item.children('p'), 'test');
        });
    });

    test('adds ui-controls class for ui_controls by default', () => {
      const ui_controls = wrapper
        .setState({ imgSrc: 'src' })
        .children()
        .first();
      checkClass(ui_controls, 'ui-controls');
    });

    test('adds figure-img img-fluid z-depth-1 m-0 classes for img by default', () => {
      wrapper
        .setState({ imgSrc: 'src' })
        .children()
        .last()
        .children()
        .find('img')
        .map(img => {
          return checkClass(img, 'figure-img.img-fluid.z-depth-1.m-0');
        });
    });

    test('adds pswp__button d-block z-depth-0 classes for Buttons control by default', () => {
      wrapper
        .setState({ imgSrc: 'src' })
        .find('Button')
        .map(button => {
          return checkClass(button, 'pswp__button.d-block.z-depth-0');
        });
    });
  });
});
