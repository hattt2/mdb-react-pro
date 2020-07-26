import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from '../../Select';
import SelectInput from '../../Select/SelectInput';
import SelectOptions from '../../Select/SelectOptions';
import SelectOption from '../../Select/SelectOption';

const DataTableSelect = ({ value, onChange, entries, label, barReverse }) => (
  <div
    data-test='datatable-select'
    className={classNames(
      'dataTables_length',
      'd-flex',
      'flex-row',
      barReverse && 'justify-content-end'
    )}
  >
    <label className='mt-4'>{label}</label>
    <Select getValue={onChange} className='my-0'>
      <SelectInput selected={value} />
      <SelectOptions>
        {entries.map((entry, index) => (
          <SelectOption checked={index === 0} key={entry} value={entry}>
            {entry}
          </SelectOption>
        ))}
      </SelectOptions>
    </Select>
  </div>
);

DataTableSelect.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  barReverse: PropTypes.bool
};

export default DataTableSelect;
export { DataTableSelect as MDBDataTableSelect };
