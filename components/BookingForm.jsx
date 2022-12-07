import { useState } from "react";
import { Collapse } from "@nextui-org/react";
import InfoForm from "./forms/InfoForm";
import SpotForm from "./forms/SpotForm";
import TicketForm from "./forms/TicketForm";

function SelectForm(props) {
  const [flow, setFlow] = useState("spot");
  const [reservation, setReservation] = useState({});
  const [order, setOrder] = useState({});
  const info = {};

  const objects = {};

  const backButton = () => {
    if (flow == "ticket") {
      setFlow("spot");
    } else {
      setFlow("ticket");
    }
  };

  const orderData = () => {
    let forms = document.querySelectorAll("form");
    for (let i = 0; i < forms.length; i++) {
      objects[i] = {
        order_id: reservation.id,
        spot: reservation.spot,
        ticket: forms[i].dataset.type,
        info: {
          firstname: forms[i].firstname.value,
          lastname: forms[i].lastname.value,
          email: forms[i].email.value,
        },
        green: order.green,
        tent2: order.tent2,
        tent3: order.tent3,
      };
    }
    console.log(objects);
  };

  const spotReservation = (data) => {
    setReservation({
      id: data.id,
      spot: data.area,
    });

    setFlow("ticket");
  };

  const ticketInfo = (event) => {
    setOrder({
      regular: Number(event.target.regular.value),
      vip: Number(event.target.vip.value),
      green: event.target.greenCamping.checked,
      tent2: event.target.tent2.value,
      tent3: event.target.tent3.value,
    });

    setFlow("info");
  };

  const contactInfo = (event) => {
    info.firstname = event.target.firstname.value;
    info.lastname = event.target.lastname.value;
    info.email = event.target.email.value;
    info.mobile = event.target.mobile.value;
    info.address1 = event.target.address1.value;
    info.address2 = event.target.address2.value;
    info.city = event.target.city.value;
    info.zip = event.target.zip.value;

    console.table({ reservation, order, info });
  };

  const getRegularAmount = () => {
    let content = [];
    for (let i = 0; i < order.regular; i++) {
      content.push(<InfoForm key={i} onSubmit={contactInfo} back={(data) => setFlow(data)} type="regular" />);
    }
    return content;
  };

  const getVIPAmount = () => {
    let content = [];
    for (let i = 0; i < order.vip; i++) {
      content.push(<InfoForm key={i} onSubmit={contactInfo} back={(data) => setFlow(data)} type="vip" />);
    }
    return content;
  };

  return (
    <>
      <Collapse.Group>
        <Collapse title="Spot" expanded>
          <SpotForm onSubmit={spotReservation} data={props.data} />
        </Collapse>
        <Collapse title="Tickets">
          <TicketForm onSubmit={ticketInfo} />
        </Collapse>
        <Collapse title="Info">
          <InfoForm />
        </Collapse>
      </Collapse.Group>
      {props.data.forEach((prop) => {
        <h1>hej</h1>;
      })}
    </>
  );
}

export default SelectForm;
