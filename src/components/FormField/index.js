import React from 'react';
import PropTypes from 'prop-types';

import { FormWrapper } from './styles';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  return (
    <FormWrapper>

      {type === 'textarea'
        ? (
          <>
            <label htmlFor={fieldId}>{label}</label>
            <input
              id={fieldId}
              placeholder={label}
              type={type}
              value={value}
              name={name}
              onChange={onChange}
              required
            />
          </>
        ) : (
          <>
            <label htmlFor={fieldId}>{label}</label>
            <input
              id={fieldId}
              placeholder={label}
              type={type}
              value={value}
              name={name}
              onChange={onChange}
              required
            />
          </>
        )}
    </FormWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
