import { Input, Textarea, Dropdown, Button } from "@nextui-org/react";
import styles from "../styles/Contact.module.css";

function contact() {
  const info = [
    { label: "Firtsname", placeholder: "John" },
    { label: "Lastname", placeholder: "Doe" },
    { label: "Email", placeholder: "johnDoe@example.com" },
    { label: "Message", placeholder: "Hi, my name is" },
  ];

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facere minima esse tempora placeat accusantium dolor ipsam, veritatis obcaecati vel cumque consectetur, doloremque eius ab
        corrupti maiores similique libero error!
      </h1>
      <div className={styles.contactForm}>
        <Input label="Firtsname" placeholder="John"></Input>
        <Input label="Lastname" placeholder="Doe"></Input>
        <Input label="Email" placeholder="johnDoe@example.com"></Input>
        <Dropdown label="Reason for contact">
          <Dropdown.Button label="Reason for contact" flat>
            Choose one
          </Dropdown.Button>
          <Dropdown.Menu label="Reason for contact" aria-label="Static Actions">
            <Dropdown.Item key="1">General enquiries</Dropdown.Item>
            <Dropdown.Item key="2">Ticket enquiries</Dropdown.Item>
            <Dropdown.Item key="3">Volunteer enquiries</Dropdown.Item>
            <Dropdown.Item key="4">Press enquiries</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Textarea label="Message" placeholder="Hi, lorem ipsum"></Textarea>
        <Button>SEND</Button>
      </div>
    </div>
  );
}

export default contact;
