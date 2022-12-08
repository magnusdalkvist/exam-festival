import styles from "../styles/Newsletter.module.css";
import { Radio, Input, Button } from "@nextui-org/react";

function Newsletter() {
  return (
    <div>
      <h6>SIGN UP TO OUR NEWSLETTER</h6>
      <form className={styles.Form}>
        <div className={styles.email_name}>
          <Input fullWidth underlined clearable labelPlaceholder="FIRST NAME" initialValue="" />
          <Input fullWidth underlined required clearable labelPlaceholder="EMAIL" initialValue="" />
          <Button>SUBSCRIBE</Button>
        </div>
        <div className={styles.radiolist}>
          <Radio.Group required label="" defaultValue="">
            <Radio size="sm" value="essential">
              Just the essential stuff, please
            </Radio>
            <Radio size="sm" value="environmental">
              I’m mostly interested in your environmental stuff
            </Radio>
            <Radio size="sm" value="all">
              Gimme everything! I want to know it all
            </Radio>
          </Radio.Group>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
