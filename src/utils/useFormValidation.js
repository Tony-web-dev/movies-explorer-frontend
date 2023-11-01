import { useCallback, useState } from "react";

export default function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isInputValid, setIsInputValid] = useState({});

  function handleChange(e) {
    const { name, value, form } = e.target;
    const errorMessage = e.target.validationMessage;
    const valid = e.target.validity.valid;

    setValues({...values, [name]: value});
    setIsValid(form.checkValidity());
    setIsInputValid({...isInputValid, [name]: valid})
    setErrors({...errors, [name]: errorMessage});
  }

const resetForm = useCallback((data = {}) => {
  setValues(data)
  setErrors({})
  setIsInputValid({})
  setIsValid(false)
}, [])

  return { values, errors, handleChange, isValid, isInputValid, resetForm };
};