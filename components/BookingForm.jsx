import { useState } from "react";
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
  const [info, setInfo] = useState([]);

  const reset = () => {
    setInfo([]);
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
        .then((response) => setRes(response))
        .catch((err) => console.error(err));

      getInfo();
    }
  };

  const getInfo = () => {
    document.querySelectorAll("form#test_form").forEach((e) => {
      const person = {};
      person.firstname = e.firstname.value;
      person.lastname = e.lastname.value;
      person.email = e.email.value;
      person.phone = e.phone.value;
      setInfo((info) => info.concat(person));
    });
  };

  const completeOrder = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: res.id }),
    };

    fetch("http://localhost:8080/fullfill-reservation", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <>
      {!res && (
        <Collapse.Group className={styles.collapse}>
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
      {res && !res?.error && (
        <>
          <h3>Billing</h3>
          <BillingForm />
        </>
      )}
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
        {res && <button onClick={reset}>Tilbage</button>}
        {!res && <button onClick={reserveSpot}>Videre</button>}
        {res && <button onClick={completeOrder}>Complete order</button>}
        {/* <button onClick={() => console.log(info)}>show info</button> */}
      </div>
    </>
  );
}

export default BookingForm;
