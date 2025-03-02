import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ label, type, placeHolder, id, value, onChange }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <div className="flex flex-col gap-3 w-full ">
      <label htmlFor={id} className="text-[13px] text-slate-800">
        {label}
      </label>
      <div className="input-box">
        <input
          className="w-full bg-transparent outline-none"
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeHolder}
          id={id}
          value={value}
          onChange={(e) => onChange(e)}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={togglePassword}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={togglePassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
