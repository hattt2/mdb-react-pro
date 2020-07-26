import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import {
  findByTestAttr,
  checkProps,
  checkClass
} from '../../../../tests/utils';
import DataTableSelect from './DataTableSelect';

const setup = (props = {}) =>
  shallow(
    <DataTableSelect
      entries={[]}
      label='testLabel'
      onChange={() => {}}
      value={10}
      {...props}
    />
  );

describe('<DataTableSelect />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'datatable-select').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DataTableSelect
        entries={[]}
        label='testLabel'
        onChange={() => {}}
        value={10}
      />,
      div
    );
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = { barReverse: true };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });
  test('does not throw warnings without expected props', () => {
    checkProps(wrapper, {});
  });

  test('renders correct label', () => {
    // if entries will not be equal to [] .text() will return different value
    expect(wrapper.find('label').text()).toEqual('testLabel');
  });

  describe('sets classes', () => {
    test('adds \'dataTables_length d-flex flex-row\' class by default', () => {
      checkClass(wrapper, 'dataTables_length.d-flex.flex-row');
    });
  });
});
