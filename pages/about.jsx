import styles from "../styles/About.module.css";
import { Collapse } from "@nextui-org/react";

function about() {
  return (
    <div>
      <div className={styles.main}>
        <h1 className={styles.h1}>ABOUT US</h1>
        <Collapse.Group className={styles.collapsegroup}>
          <Collapse title="Celebrating Sustainable Music">
            <div className={styles.info1}>
              <p>
                Greenmark Music Festival is a celebration of all things music and sustainability. We strive to provide a unique experience that merges music with the promotion of sustainable
                practices. Our festival takes place on the grounds of a beautiful nature park, and we strive to ensure that our event is as sustainable as possible. We are passionate about helping the
                environment, and we strive to ensure that our festival is as eco-friendly as possible. From the food and drink served to the choice of materials and electricity used, we are dedicated
                to reducing our environmental footprint.
              </p>
            </div>
          </Collapse>
          <Collapse title="An Eco-Friendly Music Festival">
            <div className={styles.info2}>
              <p>
                At the Greenmark Music Festival, we are passionate about creating an event that is as eco-friendly as possible. We have partnered with local farms and businesses to source organic,
                locally grown food and drinks. We have worked hard to ensure that our event is powered by renewable energy, and we are proud to boast that we are carbon neutral. We also strive to
                reduce waste and promote recycling, and we encourage our patrons to bring their own reusable cups and containers.
              </p>
            </div>
          </Collapse>
          <Collapse title="Supporting Local Talent">
            <div className={styles.info3}>
              <p>
                At the Greenmark Music Festival, we are dedicated to supporting local talent. We feature a range of local artists of all genres, from folk to pop. We also strive to book acts that are
                committed to sustainability and the environment, and we are proud to showcase their music and message. We are passionate about creating an inclusive and diverse atmosphere, and we
                strive to provide a welcoming space for all. We believe that music can be a powerful force for positive change, and we are committed to using it to create a sustainable future.
              </p>
            </div>
          </Collapse>
        </Collapse.Group>
      </div>
    </div>
  );
}

export default about;
