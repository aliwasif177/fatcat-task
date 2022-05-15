import { useEffect } from 'react';
import classNames from 'classnames';
import { useFormContext, useWatch } from 'react-hook-form';
import styles from './radioButtonGroup.module.scss';

export const RadioGroup = (props) => {
  const { options, name, type, label, description, disabled, isChecked, className, onChange } =
    props;

  const {
    register,
    formState: { errors, touchedFields },
    unregister,
    setValue,
  } = useFormContext();
  const originalValue = useWatch({ name: name });

  useEffect(() => {
    register(name);
  }, [register, name]);

  useEffect(() => {
    return () => {
      unregister(name);
    };
  }, []);

  const handleChange = (data) => {
    setValue(name, data.id, { shouldValidate: true });
    onChange && onChange(originalValue, setValue);
  };

  return (
    <span className={classNames('form-elements', styles.inputWrapper, className)}>
      {label && (
        <label htmlFor={name} className={classNames('element-label', styles.label)}>
          {label}
          {description && (
            <p className={classNames('element-description', styles.description)}>{description}</p>
          )}
        </label>
      )}

      <span className={classNames('form-elements-wrapper', styles.inputInnerWrapper)}>
        {options &&
          options.map((option) => {
            return (
              <span key={`option-${option.title}`}>
                <div className={classNames(styles.radio)}>
                  <div className={classNames(styles.innerRadio)}>
                    <input
                      id={`radio-${name}-${option.title}`}
                      type={type}
                      name={name}
                      onChange={() => handleChange(option)}
                      value={originalValue}
                      checked={option?.id == originalValue}
                    />

                    <label
                      htmlFor={`radio-${name}-${option.title}`}
                      className={classNames(styles.radioLabel)}
                    >
                      {option.title}
                    </label>
                  </div>
                  {option.additionalInput && isChecked && option.additionalInput}
                </div>
                {option?.description && (
                  <p className={styles.fieldLabelDescription}>{option.description}</p>
                )}
              </span>
            );
          })}
      </span>
      {errors[name]?.message && (
        <span className={classNames(styles.fieldError, 'form-error-element')}>
          {errors[name]?.message}
        </span>
      )}
    </span>
  );
};
