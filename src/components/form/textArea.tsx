import React, { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import type { FormFieldProps } from './types'

export const TextArea: React.FC<FormFieldProps> = ({
    name,
    required,
    placeholder,
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
                            htmlFor={name}>
                            {required && <small className="text-danger">* </small>}
                            {name}
                        </label>
                    )}

                    {fieldDescription && <span
                    >{fieldDescription}</span>}
                    <span className="form-element">
                        <textarea
                            value={originalValue}
                            {...register(name)}
                            key={name}
                            placeholder={placeholder}

                        />
                    </span>
                </span>
                <small className="text-danger float-start" style={{ clear: 'both' }}>
                </small>
            </span>
        </div>
    );
};
