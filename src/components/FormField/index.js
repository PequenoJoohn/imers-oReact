import React from 'react';
import PropTypes from 'prop-types';

import { FormFieldWrapper, Label, Input } from './styles';

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;

  const hasSuggestions = Boolean(suggestions.length);
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
              autoComplete={hasSuggestions ? 'off' : 'on'}
              list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
            />
            <Label.Text>
              {label}
            </Label.Text>
            {hasSuggestions && (
              <datalist id={`suggestionFor_${fieldId}`}>
                {suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))}
              </datalist>
            )}
          </Label>
        )}
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
