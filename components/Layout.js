import Booking from "./Booking";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, spotData }) {
  return (
    <>
      <Header spotData={spotData} />
      <Booking spotData={spotData} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
