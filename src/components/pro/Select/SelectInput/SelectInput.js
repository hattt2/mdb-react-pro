/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import selectContextHOC from '../SelectContext';

class SelectInput extends React.Component {
  componentDidMount() {
    this.props.selected && this.props.context.setSelected(this.props.selected);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.context.state.isEmpty !== this.props.context.state.isEmpty) {
      this.props.selected &&
        this.props.context.setSelected(this.props.selected);
    }
  }

  render() {
    const classes = classNames('select-dropdown', this.props.className);
    const { attributes, context } = this.props;

    const value = context.state.isEmpty
      ? this.props.selected && !context.label
        ? this.props.selected
        : ''
      : context.state.selectTextContent;

    return (
      <input
        type='text'
        readOnly
        onClick={e => context.onInputClick(e)}
        value={value}
        {...attributes}
        className={classes}
      />
    );
  }
}

SelectInput.propTypes = {
  context: PropTypes.object.isRequired,
  className: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SelectInput.defaultProps = {
  className: ''
};

export default SelectInput = selectContextHOC(SelectInput);
export { SelectInput as MDBSelectInput };
