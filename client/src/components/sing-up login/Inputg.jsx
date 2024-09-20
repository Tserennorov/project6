import React from "react";

export const Inputg = ({ placeholder, name, value, type, onchange }) => {
  return (
    <div>
      <input
        className="w-[384px] h-[48px] rounded-md border p-4 bg-gray-200 d--colors/base/base-600 text-black"
        type={type}
        name={name}
        onChange={onchange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
