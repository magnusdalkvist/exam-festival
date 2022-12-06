import React from "react";
import styles from "../styles/Newsletter.module.css";

function Newsletter() {
  return (
    <div>
      <form>
        <h6>SIGN UP TO OUR NEWSLETTER</h6>
        <div class="">
          <input type="email" name="email" id="email" placeholder="Email Address" />
          <input type="submit" value="Sign Up" class="fit" />
        </div>
        <div className={styles.radiolist}>
          <div>
            <input type="radio"></input>
            <label> Just the essential stuff, please</label>
          </div>
          <div>
            <input type="radio"></input>
            <label> I’m mostly interested in your environmental stuff</label>
          </div>
          <div>
            <input type="radio"></input>
            <label> Gimme everything! I want to know it all</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
