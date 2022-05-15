import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import 'react-day-picker/lib/style.css';
import styles from '../jobForm/jobForm.module.scss';
import { BiCalendarEvent as CalendarIcon } from 'react-icons/bi';
import classNames from 'classnames';
import dayjs from 'dayjs';

export const DateSelector = (props) => {
  const { name, label, placeholder, disabled } = props;

  const dayPickerInputStyles = {
    background: '#F6F8FA',
    border: 'none',
    color: '#95A0A5',
    pointerEvents: disabled ? 'none' : '',
  };

  const {
    register,
    formState: { errors, touchedFields },
    unregister,
    setValue,
    control,
  } = useFormContext();
  const originalValue = useWatch({ name: name });

  const handleDateChange = (date) => {
    setValue(name, dayjs(date).format('DD MMM YYYY'), { shouldValidate: true });
  };

  return (
    <>
      <div
        className={classNames(
          'w-100',
          styles.jobPostStatusContentWrapper,
          styles.jobPublishedOnwrapper,
        )}
      >
        <span className={classNames(styles.inputTitle)}>{label}</span>
        <div className={classNames(styles.publishedOn, 'd-flex align-items-center')}>
          <CalendarIcon />
          &nbsp;
          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <DayPickerInput
                inputProps={{
                  style: dayPickerInputStyles,
                }}
                // formatDate={formatDate}
                // parseDate={parseDate}
                placeholder={placeholder}
                onChange={(date) => handleDateChange(date)}
                selected={field.value}
                onDayChange={(date) => handleDateChange(date)}
                value={originalValue}
              />
            )}
          />
        </div>
      </div>
    </>
  );
};
