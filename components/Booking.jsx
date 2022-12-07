import BookingForm from "./BookingForm";
import styles from "../styles/Booking.module.css";
import { Checkbox } from "@nextui-org/react";
import { useState } from "react";

function Booking({ spotData }) {
  const [state, setState] = useState("open");

  return (
    <>
      <div className={styles.button}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
          <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
        </svg>
      </div>
      <div></div>
      <div className={styles.menu + " " + styles[state]}>
        <div className={styles.close_btn}></div>
        <BookingForm data={spotData} />
        <Checkbox size="md" defaultSelected={true}>
          Green camping
        </Checkbox>
      </div>
    </>
  );
}
export default Booking;
