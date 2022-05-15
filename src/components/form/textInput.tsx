import React, { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import classNames from 'classnames';
import type { FormFieldProps } from './types'

export const TextInput: React.FC<FormFieldProps> = ({
  name,
  label,
  type,
  required,
  placeholder,
  min,
  fieldDescription,
}) => {


  const {
    register,
    formState: { errors, touchedFields },
    unregister,
  } = useFormContext();

  const originalValue = useWatch({ name: name });

  return (
    <div
      style={{ clear: 'both' }}>
      <span>
        <span>
          {name && (
            <label
              className='d-block text-success py-3'
              htmlFor={name}>
              {required && <small className="text-danger">* </small>}
              {name}
            </label>
          )}

          {fieldDescription && <span
          >{fieldDescription}</span>}
          <span className="form-element">
            <input
              type={type}
              value={type === "date" ? originalValue.split("T")[0] : originalValue}
              {...register(name)}
              key={name}
              placeholder={placeholder}
              min={min}
            />
          </span>
        </span>
        <small className="text-danger float-start" style={{ clear: 'both' }}>
        </small>
      </span>
    </div>
  );
};
