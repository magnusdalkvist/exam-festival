import { useEffect, useState } from "react";
import { Collapse } from "@nextui-org/react";
import styles from "../styles/Booking.module.css";
import InfoForm from "./forms/InfoForm";
import SpotForm from "./forms/SpotForm";
import TicketForm from "./forms/TicketForm";
import BillingForm from "./forms/BillingForm";

function BookingForm(props) {
  const fee = [{ name: "Fixed booking fee", price: "99", id: 0, type: "fee", amount: 1 }];
  const [area, setArea] = useState();
  const [res, setRes] = useState();
  const [cart, setCart] = useState(fee);

  const reset = () => {
    setRes(null);
    setArea(null);
    setCart(fee);
  };

  const getTotal = () => {
    let total = 0;

    cart.forEach((item) => {
      total += item.amount * item.price;
    });

    return total;
  };

  const reserveSpot = async (e) => {
    if (cart.findIndex((e) => e.type == "ticket" && e.amount > 0) > -1) {
      e.preventDefault();

      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ area: area, amount: 1 }),
      };

      fetch("http://localhost:8080/reserve-spot", options)
        .then((response) => response.json())
        .then((response) => setRes(response));
    }
  };

  return (
    <>
      {!res && (
        <Collapse.Group>
          <Collapse title="Spot" expanded>
            <SpotForm data={props.data} selection={(area) => setArea(area)} />
          </Collapse>
          <Collapse disabled={!area} title="Tickets">
            <TicketForm cart={cart} setCart={setCart} />
          </Collapse>
          <Collapse disabled={cart.findIndex((e) => e.type == "ticket" && e.amount > 0) < 0} title="Ticket info">
            <InfoForm cart={cart} />
          </Collapse>
        </Collapse.Group>
      )}
      {res && !res?.error && <BillingForm />}
      {res?.error && (
        <>
          <h1>Too many requests!</h1>
          <b>Please Reload</b>
        </>
      )}
      <div className={styles.cart}>
        <h2>Total: {getTotal()},-</h2>
        <ul>
          {cart.map((item, i) => {
            if (item.amount > 0) {
              return (
                <li key={i}>
                  {item.name} {item.amount}x {item.price},-
                </li>
              );
            }
          })}
        </ul>
      </div>
      {res && <button onClick={() => reset()}>Tilbage</button>}
      {!res && <button onClick={reserveSpot}>Videre</button>}
      <button onClick={() => console.log(res)}>test</button>
    </>
  );
}

export default BookingForm;
