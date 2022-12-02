import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, navData }) {
  return (
    <>
      <header>
        <Header></Header>
      </header>

      <main>{children}</main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
