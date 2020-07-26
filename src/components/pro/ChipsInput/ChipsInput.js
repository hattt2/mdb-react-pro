import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Chip from '../Chip';

class ChipsInput extends Component {
  state = {
    chipsList: this.props.chips,
    inputValue: '',
    isTouched: false,
    isReadyToDelete: false
  };
  inputRef = React.createRef();

  handleClick = () => {
    this.setState({
      isTouched: true
    });
    this.inputRef.current.focus();
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
      isReadyToDelete: false
    });
  };

  handleProps = (id, value, target, array) => {
    const { handleRemove, handleAdd, getValue } = this.props;

    if (!target) {
      handleRemove &&
        handleRemove({
          id,
          value
        });
    } else {
      handleAdd &&
        handleAdd({
          id,
          value,
          target
        });
    }
    getValue && getValue(array);
  };

  handleEnter = e => {
    const { chipsList } = this.state;

    const newChipString = this.inputRef.current.value;
    const chipsListUpdate = [...chipsList, newChipString];
    const { target } = e;

    if (e.which === 13) {
      if (/^ *$/.test(newChipString)) {
        return;
      }

      if (chipsList.includes(newChipString)) {
        this.setState({
          inputValue: ''
        });
        return;
      }

      this.setState(
        {
          inputValue: '',
          chipsList: chipsListUpdate
        },
        () => {
          this.handleProps(
            chipsList.length,
            newChipString,
            target.previousElementSibling,
            chipsListUpdate
          );
        }
      );
    }

    if (this.state.inputValue === '') {
      this.setState({
        isReadyToDelete: true
      });
    }
  };

  handleBackspace = e => {
    if (this.state.isReadyToDelete && e.which === 8) {
      const { chipsList } = this.state;
      const itemToDelete = chipsList.pop();

      this.setState(
        {
          chipsList
        },
        () => {
          this.handleProps(chipsList.length, itemToDelete, false, chipsList);
        }
      );
    }
  };

  handleClose = param => {
    const { chipsList } = this.state;
    const { handleClose } = this.props;

    const index = chipsList.indexOf(param);
    const itemToDelete = chipsList[index];

    chipsList.splice(index, 1);

    this.setState(
      {
        chipsList
      },
      () => {
        handleClose && handleClose(itemToDelete);
        this.handleProps(index, itemToDelete, false, chipsList);
      }
    );
  };

  handleOutsideClick = () => {
    this.setState({
      isTouched: false
    });
  };

  render() {
    const {
      className,
      tag: Tag,
      handleClose,
      handleAdd,
      handleRemove,
      placeholder,
      secondaryPlaceholder,
      chipSize,
      chipColor,
      chipText,
      chipGradient,
      chipWaves,
      getValue,
      ...attributes
    } = this.props;

    const { chipsList, inputValue, isTouched } = this.state;

    const renderedChips = chipsList.map(chip => {
      return (
        <Chip
          close
          handleClose={e => this.handleClose(chip, e)}
          key={chip.toString()}
          size={chipSize}
          bgColor={chipColor}
          text={chipText}
          gradient={chipGradient}
          waves={chipWaves}
        >
          {chip}
        </Chip>
      );
    });

    let calculatePlaceholder;
    if (chipsList.length < 1) {
      calculatePlaceholder = placeholder;
    } else {
      calculatePlaceholder = secondaryPlaceholder;
    }

    const classes = classNames('chips', isTouched && 'focus', className);

    return (
      <Tag
        data-test='chips-input'
        {...attributes}
        className={classes}
        onClick={this.handleClick}
        onKeyUp={this.handleBackspace}
      >
        {renderedChips}
        <input
          className='input'
          type='text'
          placeholder={calculatePlaceholder}
          ref={this.inputRef}
          onKeyUp={this.handleEnter}
          value={inputValue}
          onChange={this.handleChange}
          onBlur={this.handleOutsideClick}
        />
      </Tag>
    );
  }
}

ChipsInput.propTypes = {
  chipColor: PropTypes.string,
  chipGradient: PropTypes.string,
  chipSize: PropTypes.string,
  chipText: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  secondaryPlaceholder: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ChipsInput.defaultProps = {
  tag: 'div',
  chips: []
};

export default ChipsInput;
export { ChipsInput as MDBChipsInput };
