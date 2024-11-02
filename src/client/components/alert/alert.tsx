import { AlertPropsType } from "@/client/types";
import React from "react";

function Alert({ label, message }: AlertPropsType) {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="font-medium capitalize">{`${label} field | `}</span>
      {message}
    </div>
  );
}

export default Alert;
