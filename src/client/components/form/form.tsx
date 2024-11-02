import { validationsConfig } from "@/client/validation/validationsConfig";
import React from "react";

const Form = ({children}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formValues).forEach((field) => {
      const validate = validationsConfig[field];
      if (validate) {
        const errorMsg = validate(formValues[field]);
        if (errorMsg) newErrors[field] = errorMsg;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit form
      console.log("Form submitted successfully:", formValues);
    }
  };
  return <form onSubmit={handleSubmit}></form>;
};

export default Form;
