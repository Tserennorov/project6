import React from "react";

export const Select = ({ handleChange }) => {
  return (
    <div className="w-full ">
      <select
        onChange={handleChange}
        class="select select-bordered bg-[#F3F4F6] w-full h-[64px] font-semibold"
      >
        <option value="MNT">MNT - Mongolian Tugrik</option>
        <option value="USD">USD - United States Dollar</option>
      </select>
    </div>
  );
};
