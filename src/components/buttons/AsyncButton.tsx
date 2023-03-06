/**
 *@description Button with Loader
 */

import React from "react";
import Loader from "../Loader";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  text: string;
  loading?: boolean;
  icon?: boolean;
}

const AsyncButton: React.FC<Props> = (props) => {
  const { text, loading, icon, onClick, className, ...rest } = props;

  return (
    <button
      disabled={loading}
      className={`w-auto items-center justify-center bg-black py-2 px-5 font-bold text-white transition-all duration-300 focus:outline-none ${className}`}
      onClick={onClick}
      {...rest}
    >
      <div className="flex items-center font-semibold">
        {icon && icon}
        {loading ? <Loader /> : text}
      </div>
    </button>
  );
};

export default AsyncButton;
