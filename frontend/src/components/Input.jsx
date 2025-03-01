import React from "react";

const Input = ({ label, type, placeHolder, id }) => {
  return (
    <div className="flex flex-col gap-3 w-full ">
      <label htmlFor={id} className="text-sm text-gray-700">
        {label}
      </label>
      <input
        className="bg-gray-100 py-3 px-5 rounded mb-5 text-sm text-gray-700"
        type={type}
        placeholder={placeHolder}
        id={id}
      />
    </div>
  );
};

export default Input;
