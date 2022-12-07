import Booking from "./Booking";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, navData }) {
  return (
    <>
      <Header />
      <Booking />
      <main>{children}</main>
      <Footer />
    </>
  );
}
