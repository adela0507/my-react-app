import React from "react";
import CurrencyInput from "react-currency-input-field";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className="subtotal">
      <CurrencyInput
        value={getBasketTotal(basket)}
        readOnly
        prefix="$"
        decimalsLimit={2}
        className="subtotal_value"
      />
      
      <p>Subtotal ({basket.length})</p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
    </div>
  );
}

export default Subtotal;
