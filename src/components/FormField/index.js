import React from 'react';

import { FormWrapper } from './styles';

function FormField({ label, type, name, value, onChange }) {
    return (
        <FormWrapper>

            {type === 'textarea' ?
                (
                    <textarea
                        placeholder={label}
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                        required
                    />
                ) : (
                    <input
                        placeholder={label}
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                        required
                    />
                )
            }
        </FormWrapper>
    )

}

export default FormField;
