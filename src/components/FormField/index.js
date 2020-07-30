import React from 'react';
import PropTypes from 'prop-types';

import { FormFieldWrapper, Label, Input } from './styles';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  return (
    <FormFieldWrapper>

      {type === 'textarea'
        ? (
          <Label>
            <textarea
              id={fieldId}
              type={type}
              value={value}
              name={name}
              onChange={onChange}
              required
            />
            <Label.Text>
              {label}
            </Label.Text>
          </Label>
        ) : (
          <Label>
            <Input
              id={fieldId}
              type={type}
              value={value}
              name={name}
              onChange={onChange}
              required
            />
            <Label.Text>
              {label}
            </Label.Text>
          </Label>
        )}
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
