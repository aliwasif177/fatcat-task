import React, { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import classNames from 'classnames';
// import styles from '../clientForm/clientForm.module.scss';
// import stylesForms from '../formColumns/forms.module.scss';
import type { FormFieldProps } from './types'
// import _ from 'lodash';

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

  useEffect(() => {
    // console.log(name)
    // let value = useWatch({ name: name });
    // console.log('nameee ==>', value)


  }, [])

  return (
    <div
      //  className={`form-group ${label ? `mt-sm-3 mt-2` : `mt-2`}`} 
      style={{ clear: 'both' }}>
      <span

      >
        <span
        // className={classNames('form-elements-wrapper', stylesForms.inputInnerWrapper)}
        >
          {name && (
            <label
              // className={stylesForms.label} 
              className='d-block text-success py-3'
              htmlFor={name}>
              {required && <small className="text-danger">* </small>}
              {name}
            </label>
          )}

          {fieldDescription && <span
          // className={styles.clientDescription}
          >{fieldDescription}</span>}
          <span className="form-element">
            <input
              type={type}
              value={type === "date" ? originalValue.split("T")[0] : originalValue}
              {...register(name)}
              key={name}
              // className={`${stylesForms.input} ${errors[name]?.message ? 'form-control border-danger' : 'form-control'
              //   }`}
              placeholder={placeholder}
              min={min}
            />
          </span>
        </span>
        <small className="text-danger float-start" style={{ clear: 'both' }}>
          {/* {_.get(errors, name)?.message} */}
        </small>
      </span>
    </div>
  );
};
