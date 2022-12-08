import { useState } from "react";
import { Collapse } from "@nextui-org/react";
import InfoForm from "./forms/InfoForm";
import SpotForm from "./forms/SpotForm";
import TicketForm from "./forms/TicketForm";
import BillingForm from "./forms/BillingForm";

function BookingForm(props) {
  const [area, setArea] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Collapse.Group>
        <Collapse title="Spot" expanded>
          <SpotForm data={props.data} selection={(area) => setArea(area)} />
        </Collapse>
        <Collapse disabled={!area} title="Tickets">
          <TicketForm cart={cart} setCart={setCart} />
        </Collapse>
        <Collapse disabled title="Ticket info">
          <InfoForm />
        </Collapse>
        <Collapse disabled title="Billing">
          <BillingForm />
        </Collapse>
      </Collapse.Group>
      <h3>Total:</h3>
      <button onClick={() => console.log(area, tickets)}>Test</button>
    </>
  );
}

export default BookingForm;
