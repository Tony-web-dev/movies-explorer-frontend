import { useCallback, useState } from "react";


export default function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    const errorMessage = e.target.validationMessage;
    const nameRegex = /[A-Za-zА-Яа-яЁё\s-]/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    setValues({...values, [name]: value});
    setIsValid(e.target.form.checkValidity());

    if (name === "name") {
      if (nameRegex.test(value)) {
        setErrors({...errors, [name]: errorMessage});
      } else {
        setErrors({...errors, [name]: "Имя может содержать только буквы, дефис и пробел"});
      }
    } else if (name === "email") {
      if (emailRegex.test(value)) {
        setErrors({...errors, [name]: errorMessage});
      } else {
        setErrors({...errors, [name]: "Некорректный e-mail"});
      }
    } else if (name === "password") {
      setErrors({...errors, [name]: errorMessage});
    } else if (name === "search") {
      setErrors({...errors, [name]: errorMessage});
    }
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid)
    }, [setValues, setErrors, setIsValid]
  );

  return { values, errors, handleChange, isValid, resetForm };
};