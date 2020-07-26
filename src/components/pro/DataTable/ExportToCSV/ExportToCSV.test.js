import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { findByTestAttr, checkProps } from '../../../../tests/utils';
import ExportToCSV from './ExportToCSV';

const setup = (props = {}) =>
  shallow(<ExportToCSV columns={[{}]} data={[]} {...props} />);

describe('<ExportToCSV />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'export-to-csv').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExportToCSV columns={[{}]} data={[]} />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      active: true,
      block: true,
      color: 'string',
      gradient: 'string',
      disabled: true,
      outline: true,
      rounded: true,
      circle: true,
      floating: true,
      flat: true,
      size: 'string',
      children: <test />,
      className: 'string'
    };
    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('invoke computeDataToLink()', () => {
    wrapper = setup({ columns: [{ field: 'test1' }, { field: 'test2' }] });
    wrapper.instance().computeDataToLink();
    expect(wrapper.state('href')).toEqual(
      'data:text/csv;charset=utf-8,test1,test2%0A'
    );
  });
});
