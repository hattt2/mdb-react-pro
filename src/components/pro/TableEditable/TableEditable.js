import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './DataTable.css';
import Fa from '../../Fa';

class TableEditable extends React.Component {
  state = {
    initialData: []
  };

  componentDidMount = () => {
    const { data } = this.props;
    data &&
      this.setState({
        ...this.state,
        initialData: data
      });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data, getValue } = this.props;
    const { initialData } = this.state;
    if (prevProps.data !== data && data !== initialData) {
      this.setState({ data });
    }

    if (prevState.initialData !== initialData) {
      if (getValue) {getValue(initialData);}
    }
  }

  addRow = () => {
    const { columns } = this.props;
    const { initialData } = this.state;
    const newData = [...initialData];
    const newRow = [];
    columns.forEach(() => {
      newRow.push('');
    });
    newData.push(newRow);

    this.setState({
      ...initialData,
      initialData: newData
    });
  };

  removeRow = index => {
    const { initialData } = this.state;
    let newData = [...initialData];
    newData = [...newData.slice(0, index), ...newData.slice(index + 1)];
    this.setState({
      ...this.state,
      initialData: newData
    });
  };

  decreaseIndex = index => {
    if (index === 0) {return;}
    const newData = this.changeArrayOrder(index, index - 1);
    this.setState({
      ...this.state,
      initialData: newData
    });
  };

  increaseIndex = index => {
    const { initialData } = this.state;
    if (index === initialData.length - 1) {return;}
    const newData = this.changeArrayOrder(index, index + 1);
    this.setState({
      ...this.state,
      initialData: newData
    });
  };

  changeArrayOrder = (
    oldIndex,
    newIndex,
    array = [...this.state.initialData]
  ) => {
    const newArray = array;
    const oldIndexValue = [...newArray[oldIndex]];
    const newIndexValue = [...newArray[newIndex]];
    newArray.splice(oldIndex, 1, newIndexValue);
    newArray.splice(newIndex, 1, oldIndexValue);
    return newArray;
  };

  onBlurHandler = (trIndex, tdIndex, e) => {
    const value = e.target.innerText;
    const { initialData } = this.state;
    let newData = [...initialData];

    newData = newData.map((item, index) => {
      if (index !== trIndex) {
        return item;
      }

      return item.map((tdItem, index) => {
        if (index !== tdIndex) {
          return tdItem;
        }

        return (tdItem = value);
      });
    });

    this.setState({
      ...this.state,
      initialData: newData
    });
  };

  onChangeTd = (e, row, column) => ({
    target: e.target,
    event: e,
    row,
    column
  });

  render() {
    const {
      className,
      small,
      bordered,
      striped,
      hover,
      data,
      columns,
      responsive,
      responsiveSm,
      responsiveMd,
      responsiveLg,
      responsiveXl,
      getValue,
      onChange,
      ...attributes
    } = this.props;
    const { initialData } = this.state;
    const classes = classNames(
      'table',
      small && 'table-sm',
      bordered && 'table-bordered',
      striped && 'table-striped',
      hover && 'table-hover',
      className
    );

    const wrapperClasses = classNames(
      'table-editable text-center',
      responsive && 'table-responsive',
      responsiveSm && 'table-responsive-sm',
      responsiveMd && 'table-responsive-md',
      responsiveLg && 'table-responsive-lg',
      responsiveXl && 'table-responsive-xl'
    );

    return (
      <div className={wrapperClasses}>
        <span onClick={this.addRow} className='table-add float-right mb-3 mr-2'>
          <a href='#!' className='text-success'>
            <Fa icon='plus' size='2x' />
          </a>
        </span>
        <table {...attributes} className={classes}>
          <thead>
            <tr>
              {columns &&
                columns.map((th, i) => {
                  return <th key={i}>{th}</th>;
                })}
              <th>Sort </th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {initialData.map((tr, trIndex) => {
              return (
                <tr key={trIndex}>
                  {tr.map((td, tdIndex) => {
                    return (
                      <td
                        key={tdIndex}
                        contentEditable
                        suppressContentEditableWarning='true'
                        onBlur={e => this.onBlurHandler(trIndex, tdIndex, e)}
                        onKeyUp={e =>
                          onChange(this.onChangeTd(e, trIndex, tdIndex))
                        }
                      >
                        {td}
                      </td>
                    );
                  })}
                  <td>
                    <span
                      onClick={() => this.decreaseIndex(trIndex)}
                      className='table-up'
                    >
                      <a href='#!' className='indigo-text'>
                        <Fa icon='long-arrow-alt-up' />
                      </a>
                    </span>
                    <span
                      onClick={() => this.increaseIndex(trIndex)}
                      className='table-down'
                    >
                      <a href='#!' className='indigo-text'>
                        <Fa icon='long-arrow-alt-down' />
                      </a>
                    </span>
                  </td>
                  <td>
                    <span
                      onClick={() => this.removeRow(trIndex)}
                      className='table-remove'
                    >
                      <button
                        type='button'
                        className='btn btn-danger btn-rounded btn-sm my-0'
                      >
                        Remove
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

TableEditable.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
  getValue: PropTypes.func,
  hover: PropTypes.bool,
  onChange: PropTypes.func,
  responsive: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool
};

TableEditable.defaultProps = {
  getValue: () => {},
  onChange: () => {}
};

export default TableEditable;
export { TableEditable as MDBTableEditable };
