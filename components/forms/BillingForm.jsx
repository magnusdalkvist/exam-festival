import { Input } from "@nextui-org/react";

const info = [
  { name: "firstname", label: "Firtsname", placeholder: "John" },
  { name: "lastname", label: "Lastname", placeholder: "Doe" },
  { name: "email", label: "Email", placeholder: "john@example.com" },
  { name: "mobile", label: "Mobile", placeholder: "12345678" },
  { name: "adress1", label: "Address 1", placeholder: "Street and number" },
  { name: "adress2", label: "Address 2 (optional)", placeholder: "Apartment, building, floor" },
  { name: "city", label: "City", placeholder: "City name" },
  { name: "zip", label: "Zip", placeholder: "1234" },
];

function InfoForm(props) {
  const contactInfo = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };

  return (
    <div className="grid">
      {info.map((info, i) => {
        return <Input width="100%" clearable name={info.name} label={info.label} placeholder={info.placeholder} key={i} />;
      })}
    </div>
  );
}

export default InfoForm;
