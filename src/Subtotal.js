import React from "react";
import CurrencyInput from "react-currency-input-field";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyInput
        value={0}
        readOnly
        prefix="$"
        decimalsLimit={2}
        className="subtotal_value"
      />
      
      <p>Subtotal (0 items)</p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
    </div>
  );
}

export default Subtotal;
