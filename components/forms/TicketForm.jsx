import TicketButton from "../TicketButton";
import { Checkbox } from "@nextui-org/react";

function TicketForm(props) {
  const ticketInfo = (e) => {
    e.preventDefault();
    if (Number(e.target.regular.value) + Number(e.target.vip.value) > 0) {
      props.onSubmit(e);
    }
  };

  return (
    <>
      <div className="test" onChange={() => console.log("hej")}>
        <TicketButton name="Regular Ticket" price="799" />
        <TicketButton name="VIP Ticket" price="1299" />
        <TicketButton name="2 person tent (incl. the tent)" price="299" />
        <TicketButton name="3 person tent (incl. the tent)" price="399" />

        <Checkbox.Group size="sm" defaultValue={["green"]} aria-label="green camping">
          <Checkbox value="green">Green</Checkbox>
        </Checkbox.Group>
      </div>
      <div>
        <h3>Total</h3>
      </div>
    </>
  );
}

export default TicketForm;
