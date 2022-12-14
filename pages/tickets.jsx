import React from "react";
import styles from "../styles/Tickets.module.css";

function tickets() {
  return (
    <div>
      <div className={styles.main}>
        <h1 className={styles.h1}>TICKETS</h1>
        <div className={styles.wrapper}>
          <div className={styles.ticketOptions}>
            <h2>Ticket options:</h2>
            <h3>Regular ticket: </h3>
            <p>This option grants you access to the festival for the entire duration. The regular ticket costs 799,- and gives you access to all the music, art, and entertainment at the festival.</p>
            <h3>VIP ticket:</h3>
            <p>
              For an upgraded experience, you can purchase a VIP ticket for 1299,-. This ticket includes exclusive access to VIP areas and amenities, such as reserved seating at the main stage, access
              to VIP-only bars and restrooms, and other perks.
            </p>
          </div>
          <div className={styles.campingOptions}>
            <h2>Campsite options:</h2>
            <h3>Fixed booking fee: </h3>
            <p>For 99,-, you can reserve a spot in the campsite for your own tent. This fee covers the cost of your campsite spot for the duration of the festival.</p>
            <h3>Green camping option: </h3>
            <p>
              For an additional 249,-, you can opt for the Green camping option. This means that your tent will be placed in a special area of the campsite where the environmental impact is minimized.
              You'll also receive a special wristband that gives you access to exclusive green camping amenities and activities.
            </p>
            <h3>Crew-set up tents: </h3>
            <p>
              If you prefer not to bring your own tent, you can pay for one of our crew-set up tents. These come in 2-person or 3-person sizes, and include the tent, bedding, and setup. The 2-person
              tent costs 299,-, and the 3-person tent costs 399,-. This option is perfect for those who want a hassle-free camping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tickets;
