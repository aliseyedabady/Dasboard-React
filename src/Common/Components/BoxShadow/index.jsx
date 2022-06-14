import { useEffect } from "react";

const BoxShadow = ({ children, style }) => {
  return (
    <div style={{ ...style }} className="box-ui">
      {children}
    </div>
  );
};

export default BoxShadow;
