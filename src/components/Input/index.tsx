import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        className={
          error ? 'form-control mb-2 border-danger' : 'form-control mb-2'
        }
        onFocus={() => clearError()}
        {...rest}
      />
      {error && <div className="text-danger d-flex mb-1">{error}</div>}
    </>
  );
};

export default Input;
