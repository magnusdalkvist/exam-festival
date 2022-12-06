import { useState } from "react";
import Anchor from "./Anchor";

function Header() {
  const [state, setState] = useState("closed");

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
        <button onClick={() => setState("open")}>Burger</button>
      </nav>
      <div className={"menu " + state}>
        <button onClick={() => setState("closed")}>Burger</button>
        <ul>
          <Anchor href="/">Home</Anchor>
          <Anchor href="/booking">Booking</Anchor>
          <Anchor href="/schedule">Schedule</Anchor>
        </ul>
      </div>
    </header>
  );
}

export default Header;
