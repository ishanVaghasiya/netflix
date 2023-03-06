import React from "react";

interface Props {
  color?: string;
}

const Loader: React.FC<Props> = ({ color }) => {
  return (
    <div className="flex items-end font-semibold">
      <span>Loading</span>
      <div className="dot-flashing">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Loader;
