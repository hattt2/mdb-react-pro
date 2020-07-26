/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ControlledSelectInput from '../ControlledSelect/ControlledSelectInput';
import ControlledSelectOptions from '../ControlledSelect/ControlledSelectOptions';

export const SelectContext = React.createContext();

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
      isEmpty: true,
      isControlledEmpty: true,
      selectValue: [],
      selectTextContent: '',
      options: this.props.options || [],
      allChecked: false,
      focused: null,
      filteredOptions: this.props.options || [],
      input: null,
      dropdown: null
    };
    this.inputRef = React.createRef();

    if (this.props.options && this.props.options.length) {
      Object.assign(this.state, this.computeValuesAndText(this.props.options));
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);

    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.addEventListener('click', this.onInputClick);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectValue !== this.state.selectValue) {
      if (typeof this.props.getValue === 'function') {
        this.props.getValue(this.state.selectValue);
      }

      if (typeof this.props.getTextContent === 'function') {
        this.props.getTextContent(this.state.selectTextContent);
      }

      if (!this.props.children) {
        this.setState({
          isControlledEmpty: !this.state.options.some(option => option.checked)
        });
      }
    }

    if (this.props.options !== prevProps.options) {
      const {
        selectValue,
        selectTextContent,
        allChecked
      } = this.computeValuesAndText(this.props.options);

      this.setState({
        options: this.props.options,
        filteredOptions: this.props.options,
        selectValue,
        selectTextContent,
        allChecked
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);

    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.removeEventListener('click', this.onInputClick);
    }
  }

  // open nieghbour ul of clicked input
  onInputClick = ({ target: input }) => {
    const dropdown = input.nextElementSibling;

    dropdown.classList.add('fadeIn');
    !this.props.outline && (dropdown.style.top = '.6rem');

    this.setState({ dropdown, input });
  };

  // close select dropdown (unless it has multiple property or search input)
  onDocumentClick = ({ target }) => {
    const { dropdown, input } = this.state;

    if (dropdown) {
      const isMultiple = target.dataset.multiple === 'true';
      const isSearchLabel = target.id === 'selectSearchInput';

      if (target === input || isMultiple || isSearchLabel) {
      } else {
        dropdown.classList.remove('fadeIn');
        this.changeFocus(null);

        this.setState({ dropdown: null });
      }
    }
  };

  computeValuesAndText = options => {
    const checkedOptions = options.filter(option => option.checked);

    const checkedValues = checkedOptions.map(opt => opt.value);
    const checkedTexts = checkedOptions.map(opt =>
      opt.text ? opt.text : opt.value
    );

    const selectTextContent = checkedTexts.length
      ? checkedTexts.join(', ')
      : this.props.selected;
    const allChecked =
      checkedOptions.length ===
      options.filter(option => !option.disabled).length;

    return {
      isControlledEmpty: !checkedOptions.length,
      selectValue: checkedValues,
      selectTextContent,
      allChecked
    };
  };

  setFilteredOptions = filteredOptions => {
    this.setState({ filteredOptions });
  };

  setOptionStatus = (option, status) => {
    if (!option.disabled) {
      option.checked = status;
    }
    return option;
  };

  applyFilteredOptionsChanges = (options, filteredOptions) => {
    filteredOptions.forEach(filteredOption => {
      const index = options.findIndex(
        option => option.value === filteredOption.value
      );

      filteredOption.checked !== options[index].checked &&
        this.setOptionStatus(options[index], filteredOption.checked);
    });

    return options;
  };

  changeFocus = value => {
    switch (value) {
      case null:
        this.setState(prevState =>
          prevState.focused !== value ? { focused: null } : null
        );
        break;
      case 0:
        this.setState({ focused: 0 });
        break;
      default:
        this.setState(prevState => ({ focused: prevState.focused + value }));
        break;
    }
  };

  selectOneOption = value => {
    this.setState(prevState => {
      const options = [...prevState.options];
      const optionIndex = options.findIndex(option => option.value === value);

      options.forEach((option, index) =>
        index !== optionIndex
          ? this.setOptionStatus(option, false)
          : this.setOptionStatus(option, !option.checked)
      );

      return this.computeValuesAndText(options);
    });
  };

  selectMultipleOption = value => {
    this.setState(prevState => {
      const options = [...prevState.options];
      const optionIndex = options.findIndex(option => option.value === value);

      options[optionIndex].checked = !options[optionIndex].checked;

      return this.computeValuesAndText(options);
    });
  };

  selectAllOptions = () => {
    this.setState(prevState => {
      let options = [...prevState.options];
      const filteredOptions = [...prevState.filteredOptions].filter(
        option => !option.disabled
      );

      const areSomeUnchecked = filteredOptions.some(option => !option.checked);

      areSomeUnchecked
        ? filteredOptions.map(
            option => !option.checked && this.setOptionStatus(option, true)
          )
        : filteredOptions.map(option => this.setOptionStatus(option, false));

      if (filteredOptions.length !== options.length) {
        options = this.applyFilteredOptionsChanges(options, filteredOptions);
      }

      return this.computeValuesAndText(options);
    });
  };

  selectOption = value => {
    if (this.props.multiple) {
      value === this.props.selectAllValue
        ? this.selectAllOptions()
        : this.selectMultipleOption(value);
    } else {
      this.selectOneOption(value);
    }
  };

  triggerOptionChange = (value = [], text = this.state.selectedValue) => {
    Array.isArray(text) && (text = text.join(', '));

    this.setState({
      selectValue: value,
      selectTextContent: text,
      isEmpty: !value.length
    });
  };

  setSelected = selectedValue => this.setState({ selectedValue });

  returnComponentContent = () => {
    const {
      className,
      color,
      children,
      getTextContent,
      getValue,
      label,
      labelClass,
      multiple,
      outline,
      required,
      search,
      searchLabel,
      searchId,
      selected,
      selectAll,
      selectAllClassName,
      selectAllLabel,
      selectAllValue,
      focusShadow,
      focusBackgroundColor,
      ...attributes
    } = this.props;

    const {
      isEmpty,
      isControlledEmpty,
      dropdown: isOpened,
      selectTextContent
    } = this.state;

    const classes = classNames(
      'select-wrapper mdb-select md-form',
      color ? 'colorful-select dropdown-' + color : '',
      outline ? 'md-outline' : '',
      className
    );

    const labelClasses = classNames(
      !outline && 'mdb-main-label',
      labelClass,
      children
        ? (!isEmpty || isOpened) && 'active text-primary'
        : (!isControlledEmpty || isOpened) && 'active text-primary'
    );

    const needToMoveOutline = outline && isEmpty && !isOpened;

    const uncontrolledLabelStyles = {
      transform: needToMoveOutline && 'translateY(7px)',
      fontSize: needToMoveOutline && '1rem',
      fontWeight: needToMoveOutline && '300',
      zIndex: isEmpty && !isOpened ? 1 : 2
    };

    const controlledLabelStyles = {
      zIndex: outline && (!isControlledEmpty || isOpened) && 4,
      transform: isControlledEmpty && !isOpened && 'translateY(7px)'
    };

    if (!children) {
      const controlledValue = isControlledEmpty
        ? selected && !label
          ? selected
          : ''
        : selectTextContent;

      return (
        <>
          <div
            {...attributes}
            data-color={color}
            data-multiple={multiple}
            className={classes}
          >
            <span className='caret'>▼</span>
            <ControlledSelectInput
              value={controlledValue}
              ref={this.inputRef}
              required={required}
            />
            <ControlledSelectOptions
              multiple={multiple}
              options={this.state.options}
              search={search}
              searchLabel={searchLabel}
              selected={selected}
              selectOption={this.selectOption}
              selectAll={selectAll}
              selectAllClassName={selectAllClassName}
              selectAllLabel={selectAllLabel}
              selectAllValue={selectAllValue}
              allChecked={this.state.allChecked}
              inputRef={this.inputRef}
              setFilteredOptions={this.setFilteredOptions}
              focused={this.state.focused}
              changeFocus={this.changeFocus}
              focusShadow={focusShadow}
              focusBackgroundColor={focusBackgroundColor}
            />
            {label && (
              <label className={labelClasses} style={controlledLabelStyles}>
                {label}
              </label>
            )}
          </div>
        </>
      );
    }
    return (
      <SelectContext.Provider
        value={{
          state: this.state,
          multiple,
          triggerOptionChange: this.triggerOptionChange,
          label,
          setSelected: this.setSelected,
          onInputClick: this.onInputClick
        }}
      >
        <div
          {...attributes}
          data-color={color}
          data-multiple={multiple}
          className={classes}
        >
          <span className='caret'>▼</span>
          {children}
          {label && (
            <label className={labelClasses} style={uncontrolledLabelStyles}>
              {label}
            </label>
          )}
        </div>
      </SelectContext.Provider>
    );
  };

  render() {
    return this.returnComponentContent();
  }
}

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  focusBackgroundColor: PropTypes.string,
  focusShadow: PropTypes.string,
  getTextContent: PropTypes.func,
  getValue: PropTypes.func,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
      icon: PropTypes.string,
      text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      value: PropTypes.string
    })
  ),
  outline: PropTypes.bool,
  required: PropTypes.bool,
  search: PropTypes.bool,
  searchId: PropTypes.string,
  searchLabel: PropTypes.string,
  selectAllClassName: PropTypes.string,
  selectAllLabel: PropTypes.string,
  selectAllValue: PropTypes.string,
  selected: PropTypes.string
};

Select.defaultProps = {
  label: '',
  labelClass: '',
  outline: false,
  required: false,
  selected: '',
  selectAllValue: '0'
};

export default Select;
export { Select as MDBSelect };
