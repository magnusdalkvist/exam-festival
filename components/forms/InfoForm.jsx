import styles from "../../styles/Booking.module.css";
import React, { useRef } from "react";
import { Input } from "@nextui-org/react";

function InfoForm(props) {
  const theForm = useRef();

  const validate = () => {
    console.log(theForm.current.checkValidity());
  };

  return (
    <div className={styles.info_list}>
      {props.cart.map((item, index) => {
        if (item.amount > 0 && item.type == "ticket") {
          const fields = [];

          for (let i = 0; i < item.amount; i++) {
            fields.push(
              <form ref={theForm} id="test_form" data-type={item.value} className={styles.info} key={i} onChange={validate}>
                <b>Ticket {i + 1}</b>
                <Input width="100%" name="firstname" label="Firstname" placeholder="John" required pattern="[A-Za-z]{2,}" key={1 * (i * 4 + 1)}></Input>
                <Input width="100%" name="lastname" label="Lastname" placeholder="Doe" required pattern="[A-Za-z]{2,}" key={2 * (i * 5 + 1)}></Input>
                <Input width="100%" name="email" label="Email" placeholder="johndoe@example.com" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" key={3 * (i * 4 + 1)}></Input>
                <Input width="100%" name="phone" label="Phone" placeholder="12345678" required pattern="[+0-9]{8,}" key={4 * (i * 4 + 1)}></Input>
              </form>
            );
          }
          return (
            <div className={styles.info_item} key={index}>
              <h1 className={styles.info_type}>{item.value}</h1>
              {fields}
            </div>
          );
        }
      })}
    </div>
  );
}

export default InfoForm;
