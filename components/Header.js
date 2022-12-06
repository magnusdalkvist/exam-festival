import { useRouter } from "next/router";
import { useState } from "react";
import Anchor from "./Anchor";

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
    <header>
      <nav>
        <ul>
          <li>
            <Anchor className="logo" href="/">
              Greenmark
            </Anchor>
          </li>
        </ul>
        <div className="burger_wrapper" onClick={openClose}>
          <div className={"hamburger " + state}></div>
        </div>
      </nav>
      <div className={"menu " + state}>
        <ul className="menu_links">
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
        </ul>
      </div>
    </header>
  );
}

export default Header;
