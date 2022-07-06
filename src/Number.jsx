import React from "react";
import { useSelector } from "react-redux";

const Number = () => {
  const count = useSelector((state) => state.count);
  return <div className="number">{count}</div>;
};

export default Number;
