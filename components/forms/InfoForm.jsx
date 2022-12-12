import styles from "../../styles/Booking.module.css";
import { Input } from "@nextui-org/react";

function InfoForm(props) {
  return (
    <div className={styles.info_list}>
      {props.cart.map((item, index) => {
        if (item.amount > 0 && item.type == "ticket") {
          const fields = [];

          for (let i = 0; i < item.amount; i++) {
            fields.push(
              <form id="test_form" className={styles.info} key={i}>
                <b>Ticket {i + 1}</b>
                <Input width="100%" name="firstname" label="Firstname" placeholder="John" required clearable key={1 * (i * 4 + 1)}></Input>
                <Input width="100%" name="lastname" label="Lastname" placeholder="Doe" required clearable key={2 * (i * 5 + 1)}></Input>
                <Input width="100%" name="email" label="Email" placeholder="johndoe@example.com" required clearable key={3 * (i * 4 + 1)}></Input>
                <Input width="100%" name="phone" label="Phone" placeholder="12345678" required clearable key={4 * (i * 4 + 1)}></Input>
              </form>
            );
          }
          return (
            <div key={index}>
              <h1 className={styles.info_type}>{item.name}</h1>
              {fields}
            </div>
          );
        }
      })}
    </div>
  );
}

export default InfoForm;
