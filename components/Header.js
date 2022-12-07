import { useState } from "react";
import Anchor from "./Anchor";
import styles from "../styles/Header.module.css";

function Header() {
  const [state, setState] = useState("close");

  const openClose = () => {
    if (state == "close") {
      setState("open");
    } else {
      setState("close");
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Anchor className={styles.logo} href="/">
              Greenmark
            </Anchor>
          </li>
        </ul>
        <div className={styles.burger_wrapper} onClick={openClose}>
          <div className={styles.hamburger + " " + styles[state]}></div>
        </div>
      </nav>
      <div className={styles.menu + " " + styles[state]}>
        <ul className={styles.menu_links}>
          <Anchor
            href="/"
            click={() => {
              setState("close");
            }}
          >
            Home
          </Anchor>
          <Anchor
            href="/booking"
            click={() => {
              setState("close");
            }}
          >
            Booking
          </Anchor>
          <Anchor
            href="/schedule"
            click={() => {
              setState("close");
            }}
          >
            Schedule
          </Anchor>
          <Anchor
            href="/contact"
            click={() => {
              setState("close");
            }}
          >
            Contact
          </Anchor>
          <Anchor
            href="/about"
            click={() => {
              setState("close");
            }}
          >
            About
          </Anchor>
        </ul>
      </div>
    </header>
  );
}

export default Header;
