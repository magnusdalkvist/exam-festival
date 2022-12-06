import { useRouter } from "next/router";
import { useState } from "react";
import Anchor from "./Anchor";

function Header() {
  const [state, setState] = useState("close");
  const router = useRouter();

  const pages = ["home", "booking", "schedule"];

  pages.forEach((p) => {
    console.log(p);
  });

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
          {pages.map((p) => {
            return (
              <Anchor
                href={"/" + p}
                click={() => {
                  setState("close");
                }}
              >
                {p}
              </Anchor>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
