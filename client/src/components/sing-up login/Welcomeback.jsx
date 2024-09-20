import React from "react";

export const Welcomeback = ({ title, description }) => {
  return (
    <div
      className="flex
    flex-col items-center gap-2"
    >
      <h1 className="t--colors/slate/900 font-semibold text-2xl ">{title}</h1>
      <p>{description}</p>
    </div>
  );
};
