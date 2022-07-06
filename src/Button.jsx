import React from "react";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "plus" }); // { type: "plus", payload: 100 }
  };
  
  const handleDecrement = () => {
    dispatch({ type: "minus" });
  };

  return (
    <div className="two__btn">
      <div className="plus__btn">
        <button onClick={handleIncrement}>plus</button>
      </div>
      <div className="minus__btn">
        <button onClick={handleDecrement}>minus</button>
      </div>
    </div>
  );
};

export default Button;
