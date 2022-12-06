import Head from "next/head";
import styles from "../styles/Home.module.css";
import Anchor from "../components/Anchor";
import Image from "next/image";

export default function Home() {
  console.log(styles);
  return (
    <>
      <Head>
        <title>GREENMARK FESTIVAL</title>
        <meta name="description" content="GREENMARK FESTIVAL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.splash} style={{ backgroundImage: "url(/treelines.svg)" }}>
        <div className={styles.splash_titles}>
          <h2 className={styles.splash_h2}>WE CARE ABOUT THE ENVIRONMENT</h2>
          <h2 className={styles.splash_h2}>WE CARE ABOUT FREEDOM</h2>
          <h2 className={styles.splash_h2}>AND HUMAN RIGHTS</h2>
          <h2 className={styles.splash_h2}>WE CARE ABOUT OUR GREEN FUTURE</h2>
        </div>
        <div className={styles.splash_calltoaction}>
          <Anchor className={styles.calltoaction} href="/booking">
            TICKETS
          </Anchor>
          <Anchor className={styles.calltoaction} href="/schedule">
            SCHEDULE
          </Anchor>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.infomation}>
          <Image></Image>
          <h3></h3>
          <p></p>
        </div>
        <div className={styles.infomation}>
          <Image></Image>
          <h3></h3>
          <p></p>
        </div>
        <div className={styles.infomation}>
          <Image></Image>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </>
  );
}
