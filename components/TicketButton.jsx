import styles from "../styles/Booking.module.css";
import { useEffect, useState } from "react";

function TicketButton(props) {
  const [amount, setAmount] = useState(0);
  const cartItem = {};

  const addToCart = (e) => {
    if (amount > 0 && e.target.innerHTML == "-") {
      setAmount(amount - 1);
    }
    if (amount < 99 && e.target.innerHTML == "+") {
      setAmount(amount + 1);
    }
  };

  useEffect(() => {
    cartItem.name = props.value;
    cartItem.price = props.price;
    cartItem.id = props.id;
    cartItem.amount = amount;
    props.addItem(cartItem);
  }, [amount]);

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
        <input type="text" name={props.value} className={styles.ticket_amount} value={amount} disabled />
        <button type="button" onClick={addToCart}>
          +
        </button>
      </div>
    </div>
  );
}

export default TicketButton;
