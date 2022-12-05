import { useState } from "react";

function TicketButton(props) {
  const [value, setValue] = useState(0);

  const decrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increase = () => {
    setValue(value + 1);
  };

  return (
    <div className="ticket">
      <div>
        <p>{props.name}</p>
        <p>{props.price},-</p>
      </div>
      <button type="button" onClick={decrease}>
        -
      </button>
      <p className="ticketAmount">{value}</p>
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default TicketButton;
