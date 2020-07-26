import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button';

class ExportToCSV extends Component {
  state = {
    columns: this.props.columns,
    data: this.props.data,
    href: ''
  };

  componentDidMount() {
    this.computeDataToLink();
  }

  componentDidUpdate(prevProps, prevState) {
    const { data, columns } = this.props;
    if (prevState.data !== data || prevState.columns !== columns) {
      this.setState(
        {
          columns,
          data
        },
        this.computeDataToLink()
      );
    }
  }

  computeDataToLink = () => {
    this.setState(prevState => ({
      href: encodeURI(
        `data:text/csv;charset=utf-8,${[
          prevState.columns.map(col => col.field).join(','),
          [].concat
            .apply([], prevState.data)
            .map(row => Object.values(row).join(','))
            .join('\n')
        ].join('\n')}`
      )
    }));
  };

  render() {
    const {
      active,
      block,
      circle,
      className,
      color,
      children,
      outline,
      size,
      rounded,
      gradient,
      floating,
      flat,
      ...attributes
    } = this.props;
    const { href } = this.state;
    return (
      <Button
        active={active}
        block={block}
        circle={circle}
        className={className}
        color={color}
        outline={outline}
        size={size}
        rounded={rounded}
        gradient={gradient}
        floating={floating}
        flat={flat}
        role='button'
        type='link'
        {...attributes}
        href={href}
        download='export.csv'
        data-test='export-to-csv'
      >
        {children}
      </Button>
    );
  }
}

ExportToCSV.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.array.isRequired,
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  floating: PropTypes.bool,
  gradient: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.string
};

export default ExportToCSV;
export { ExportToCSV as MDBExportToCSV };
