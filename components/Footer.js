import styles from "../styles/Footer.module.css";
import Anchor from "./Anchor";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.newsletterform}>
          <Newsletter />
        </div>
        <div className={styles.quicklinks}>
          <h6>QUICK LINKS</h6>
          <ul className="footer-links">
            <li>
              <Anchor href="#/about/">About Us</Anchor>
            </li>
            <li>
              <Anchor href="#/contact/">Contact Us</Anchor>
            </li>
            <li>
              <Anchor href="#">Schedule</Anchor>
            </li>
            <li>
              <Anchor href="/privacy-policy">Privacy Policy</Anchor>
            </li>
            <li>
              <Anchor href="/terms-conditions">Terms & Conditions</Anchor>
            </li>
          </ul>
        </div>
      </footer>

      <div>&copy;2022 Lasse & son</div>
    </>
  );
}

export default Footer;
