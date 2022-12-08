import styles from "../styles/Booking.module.css";
import { useEffect, useState } from "react";

function TicketButton(props) {
  const [value, setValue] = useState(0);
  const cartItem = {};

  const addToCart = (e) => {
    if (value > 0 && e.target.innerHTML == "-") {
      setValue((old) => old - 1);
    }
    if (value < 99 && e.target.innerHTML == "+") {
      setValue((old) => old + 1);
    }
    cartItem.name = props.value;
    cartItem.price = props.price;
    cartItem.id = props.id;
    cartItem.type = props.type;
    cartItem.amount = value;
    props.addItem(cartItem);
  };

  return (
    <div className={styles.ticket}>
      <div>
        <p>{props.name}</p>
        <i>{props.price},-</i>
      </div>
      <div className={styles.button_wrapper}>
        <button type="button" onClick={addToCart}>
          -
        </button>
        <input type="text" name={props.value} className={styles.ticket_amount} value={value} disabled />
        <button type="button" onClick={addToCart}>
          +
        </button>
      </div>
    </div>
  );
}

export default TicketButton;
