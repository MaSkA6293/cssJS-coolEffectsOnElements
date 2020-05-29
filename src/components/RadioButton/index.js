import React from "react";
import "./index.scss";

const RadioButton = () => {
  return (
    <div className="radio-button-contaner">
      <div className="radio-button-contaner__cash cash">
        <input type="radio" name="pay-for" value="cash" id="input-cash" />
        <label htmlFor="input-cash">
          <div className="cash__img"></div>
          <span>Cash</span>
        </label>
      </div>

      <div className="radio-button-contaner__card card">
        <input type="radio" name="pay-for" value="card" id="input-card" />
        <label htmlFor="input-card">
          <div className="card__img"></div>
          <span>Card</span>
        </label>
      </div>
    </div>
  );
};
export default RadioButton;
