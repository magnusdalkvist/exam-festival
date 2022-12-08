import TicketButton from "../TicketButton";
import { Checkbox } from "@nextui-org/react";
import { useRef, useState } from "react";

function TicketForm(props) {
  const theForm = useRef(null);

  const addItem = (e) => {
    let cartCopy = [...props.cart];
    const i = props.cart.findIndex((f) => f.id === e.id);
    if (i > -1) {
      cartCopy[i].amount++;
      props.setCart(cartCopy);
    } else {
      props.setCart((prevState) => prevState.concat(e));
    }
  };

  return (
    <form ref={theForm}>
      <TicketButton value="regular" name="Regular Ticket" price="799" id={0} addItem={addItem} />
      <TicketButton value="vip" name="VIP Ticket" price="1299" id={1} addItem={addItem} />
      <TicketButton value="tent2" name="2 person tent (incl. the tent)" price="299" id={2} addItem={addItem} />
      <TicketButton value="tent3" name="3 person tent (incl. the tent)" price="399" id={3} addItem={addItem} />

      {/* <Checkbox.Group size="sm" defaultValue={["green"]} aria-label="green camping">
        <Checkbox value="green" name="green">
          Green camping
        </Checkbox>
      </Checkbox.Group> */}
    </form>
  );
}

export default TicketForm;
