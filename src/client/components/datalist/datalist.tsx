import React from "react";
import { type DatalistPropType } from "@/client/types";

const Datalist = ({ listid, listData }: DatalistPropType) => {
  return (
    <datalist id={listid}>
      {listData.length > 0 &&
        listData.map((listItem) => (
          <option
            key={listItem.id}
            value={listItem.label}
            className="text-red-900"
          >
            {listItem.value}
          </option>
        ))}
      {listData.length === 0 && <option value="No list" />}
    </datalist>
  );
};

export default Datalist;
