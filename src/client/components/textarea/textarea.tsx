import React from "react";
import Alert from "../alert/alert";
import { type TextareaType } from "@/client/types";

const Textarea = ({
  label,
  name,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}: TextareaType) => {
  return (
    <div>
      <label
        htmlFor={`${name}-textarea`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id={`${name}-textarea`}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error?.hasError && <Alert label={name} message={error.message} />}
    </div>
  );
};

export default Textarea;
