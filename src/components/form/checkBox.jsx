import React, { useEffect, useRef } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import classNames from 'classnames';
import styles from 'components/formColumns/forms.module.scss';

export const CheckBox = (props) => {
  const { name, label, type, required, placeHolder, min, disabled, classNameLabel, description } =
    props;
  const {
    register,
    formState: { errors, touchedFields },
    unregister,
    setValue,
  } = useFormContext();

  const originalValue = useWatch({ name: name });

  const handleCheckBox = (e) => {
    if (e) {
      setValue(name, true);
    } else {
      setValue(name, e);
    }
  };
  return (
    <label
      className={classNames(
        'form-element',
        styles.inputCheckboxLabel,
        {
          [styles.checked]: originalValue,
          [styles.disabled]: disabled,
        },
        classNameLabel,
      )}
    >
      <input
        type={type}
        value={originalValue}
        name={name}
        {...register(name)}
        onChange={(event) => handleCheckBox(event.target.checked)}
        disabled={disabled}
      />
      <strong>{label}</strong>
      {description && <p className={styles.fieldLabelDescription}>{description}</p>}
    </label>
  );
};
