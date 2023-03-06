import React from "react";

interface Props {
  active: boolean;
  onClick: Function;
  className: any;
}

/**
 *@description hamburger menu Like drawer
 *@param active : boolean
 *@param onClick : function
 *@param onClose : function
 */
const Hamburger: React.FC<Props> = ({ active, onClick, className }) => {
  return (
    <div
      className={`${className} hamburger ${active ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

export default Hamburger;
