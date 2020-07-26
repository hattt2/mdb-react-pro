import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InputFile.css';
import CloseIcon from '../../CloseIcon';

const InputFile = ({
  btnColor,
  getValue,
  btnTitle,
  reverse,
  className,
  multiple,
  reset,
  resetClassName,
  textFieldTitle,
  resetAriaLabel
}) => {
  const [files, setFiles] = useState(false);

  const fileChange = files => {
    if (files.length > 0) {
      if (files.length > 1) {
        const filesNames = [];
        for (let i = 0; i < files.length; i++) {
          filesNames.push(files[i].name);
        }
        setFiles(filesNames);
      } else {
        setFiles(files[0].name);
      }
    } else {
      setFiles(false);
    }
  };

  const onChangeHandler = e => {
    fileChange(e.target.files);
    getValue && getValue(e.target.files);
  };

  const resetFiles = () => {
    files && setFiles(false);
  };

  const btnClass = classNames(
    'btn',
    `btn-${btnColor}`,
    'btn-sm',
    reverse ? 'float-right' : 'float-left'
  );

  const inputFieldClass = classNames(
    'file-path',
    'validate',
    files ? 'valid' : false,
    className
  );

  const wrapperClass = classNames(
    'file-field',
    'md-form',
    reverse && 'file-field-right'
  );

  return (
    <div data-test='input-file' className={wrapperClass}>
      <div className={btnClass}>
        <span>{btnTitle}</span>
        <input multiple={multiple} onChange={onChangeHandler} type='file' />
      </div>
      <div className='file-path-wrapper'>
        <input
          className={inputFieldClass}
          type='text'
          placeholder={files || textFieldTitle}
          style={{ position: reset ? 'relative' : null }}
        />
      </div>
      {reset && (
        <CloseIcon
          onClick={resetFiles}
          className={resetClassName}
          ariaLabel={resetAriaLabel || null}
          style={{
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)'
          }}
        />
      )}
    </div>
  );
};

InputFile.propTypes = {
  btnColor: PropTypes.string,
  btnTitle: PropTypes.string,
  className: PropTypes.string,
  multiple: PropTypes.bool,
  reset: PropTypes.bool,
  resetAriaLabel: PropTypes.string,
  resetClassName: PropTypes.string,
  reverse: PropTypes.bool,
  textFieldTitle: PropTypes.string
};

InputFile.defaultProps = {
  btnTitle: 'Choose file',
  textFieldTitle: 'Upload your file',
  btnColor: 'primary',
  reset: false,
  reverse: false
};

export default InputFile;
export { InputFile as MDBFileInput };
