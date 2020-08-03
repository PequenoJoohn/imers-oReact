import { useState } from 'react';

function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChangeValues(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  function clearForm() {
    setValues(initialState);
  }

  return {
    values,
    handleChangeValues,
    clearForm,
  };
}

export default useForm;
