import Anchor from "./Anchor";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Anchor className="logo" href="/">
            Greenmark
          </Anchor>
        </li>
      </ul>
      <button>Burger</button>
    </nav>
  );
}

export default Header;
