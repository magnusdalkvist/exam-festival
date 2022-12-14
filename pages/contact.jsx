import React from "react";
import { Input, Textarea, Dropdown, Button, useInput } from "@nextui-org/react";
import styles from "../styles/Contact.module.css";

function contact() {
  const [selected, setSelected] = React.useState(new Set(["Choose one"]));
  const { value, reset, bindings } = useInput("");

  const selectedValue = React.useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected]);
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
      <h1 className={styles.h1}>CONTACT US</h1>
      <div className={styles.contactForm}>
        <Input clearable label="Full Name" placeholder="John Doe" helperText="Enter your Full Name" />
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
          helperText="Enter your Email"
        />

        <Dropdown label="Reason for contact">
          <Dropdown.Button color="secondary" css={{ tt: "capitalize" }} flat>
            {selectedValue}
          </Dropdown.Button>
          <Dropdown.Menu
            selectedKeys={selected}
            onSelectionChange={setSelected}
            disallowEmptySelection
            aria-label="Single selection actions"
            selectionMode="single"
            label="Reason for contact"
            aria-label="Static Actions"
          >
            <Dropdown.Item key="general">General enquiries</Dropdown.Item>
            <Dropdown.Item key="ticket">Ticket enquiries</Dropdown.Item>
            <Dropdown.Item key="volunteer">Volunteer enquiries</Dropdown.Item>
            <Dropdown.Item key="press">Press enquiries</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Textarea label="Message" placeholder="Hi, im writing because ..." helperText="Write your message here"></Textarea>
        <Button>SEND</Button>
      </div>
      <div className={styles.splash} style={{ backgroundImage: "url(/treelines.svg)" }}></div>
    </div>
  );
}

export default contact;
