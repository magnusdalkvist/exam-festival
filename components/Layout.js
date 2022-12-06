import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, navData }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
