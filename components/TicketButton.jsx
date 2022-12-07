import styles from "../styles/Booking.module.css";
import { useState } from "react";

function TicketButton(props) {
  const [value, setValue] = useState(0);

  const decrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increase = () => {
    if (value < 99) {
      setValue(value + 1);
    }
  };

  return (
    <div className={styles.ticket}>
      <div>
        <p>{props.name}</p>
        <i>{props.price},-</i>
      </div>
      <div className={styles.button_wrapper}>
        <button type="button" onClick={decrease}>
          -
        </button>
        <input type="text" className={styles.ticket_amount} value={value} disabled />
        <button type="button" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default TicketButton;
