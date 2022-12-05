import TicketButton from "../TicketButton";

function TicketForm(props) {
  const ticketInfo = (e) => {
    e.preventDefault();
    if (Number(e.target.regular.value) + Number(e.target.vip.value) > 0) {
      props.onSubmit(e);
    }
  };

  return (
    <form className="tickets" onSubmit={ticketInfo} id="ticket">
      <div>
        <label htmlFor="regular">Standard billet</label>
        <input type="number" name="regular" defaultValue="0" />
      </div>
      <div>
        <label htmlFor="vip">VIP billet</label>
        <input type="number" name="vip" defaultValue="0" />
      </div>
      <div>
        <label htmlFor="greenCamping">Grøn camping</label>
        <input type="checkbox" name="greenCamping" />
      </div>
      <div>
        <label htmlFor="tent2">Opsætning af 2 personers telt (inklusiv telt)</label>
        <input type="number" name="tent2" defaultValue="0" />
      </div>
      <div>
        <label htmlFor="tent2">Opsætning af 3 personers telt (inklusiv telt)</label>
        <input type="number" name="tent3" defaultValue="0" />
      </div>
    </form>
  );
}

export default TicketForm;
