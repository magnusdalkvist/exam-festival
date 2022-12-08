import { useState } from "react";
import { Collapse } from "@nextui-org/react";
import InfoForm from "./forms/InfoForm";
import SpotForm from "./forms/SpotForm";
import TicketForm from "./forms/TicketForm";
import BillingForm from "./forms/BillingForm";

function BookingForm(props) {
  const [area, setArea] = useState(null);
  const [cart, setCart] = useState([]);

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  };

  return (
    <>
      <Collapse.Group>
        <Collapse title="Spot" expanded>
          <SpotForm data={props.data} selection={(area) => setArea(area)} />
        </Collapse>
        <Collapse disabled={!area} title="Tickets">
          <TicketForm cart={cart} setCart={setCart} />
        </Collapse>
        <Collapse disabled={getTotal() == 0} title="Ticket info">
          <InfoForm cart={cart} />
        </Collapse>
        <Collapse disabled title="Billing">
          <BillingForm />
        </Collapse>
      </Collapse.Group>
      <h2>Total:</h2>
      <h3>{getTotal()},-</h3>
      <button onClick={() => console.log(area, cart)}>Test</button>
    </>
  );
}

export default BookingForm;
