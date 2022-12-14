import styles from "../styles/Newsletter.module.css";
import { Radio, Input, useInput, Button, spacer, Spacer } from "@nextui-org/react";
import React from "react";

function Newsletter() {
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  return (
    <div className={styles.main}>
      <h6>SIGN UP TO OUR NEWSLETTER</h6>
      <form className={styles.form}>
        <div className={styles.email_name}>
          <Input clearable label="Name" placeholder="Enter your name" />
          <Input
            className={styles.input}
            {...bindings}
            clearable
            shadow={false}
            onClearClick={reset}
            status={helper.color}
            color={helper.color}
            helperColor={helper.color}
            helperText={helper.text}
            type="email"
            label="Email"
            placeholder="johndoe@example.com"
          />
        </div>
        <div className={styles.radiolist}>
          <Radio.Group required aria-label="radiolist" defaultValue="">
            <Radio aria-label="essential" size="sm" value="essential">
              Just the essential stuff, please
            </Radio>
            <Radio aria-label="environmental" size="sm" value="environmental">
              I’m mostly interested in your environmental stuff
            </Radio>
            <Radio aria-label="all" size="sm" value="all">
              Gimme everything! I want to know it all
            </Radio>
          </Radio.Group>
          <Spacer y={0.8}></Spacer>
          <Button>SUBSCRIBE</Button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
