import React from "react";
import { type InputType } from "@/client/types";
import Alert from "../alert/alert";
import Datalist from "../datalist/datalist";

function Input({
  label,
  type,
  name,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
  listid,
  listData,
}: InputType) {

  return (
    <div>
      <label
        htmlFor={`${name}-input`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={`${name}-input`}
        type={type}
        name={name}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        list={listid}
      />
      {error?.hasError && <Alert label={name} message={error.message} />}
      {listid && listData && <Datalist listid={listid} listData={listData} />}
    </div>
  );
}

export default Input;
