import { useState } from "react";

export default function SpotForm(props) {
  const [area, setArea] = useState("");
  let id;

  const reserveSpot = async (e) => {
    e.preventDefault();
    const selectedArea = (selected) => {
      return selected.area === area;
    };

    if (props.data.find(selectedArea).available > 0) {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ area: area, amount: 1 }),
      };

      fetch("http://localhost:8080/reserve-spot", options)
        .then((response) => response.json())
        .then((response) => (id = response.id))
        .then(() => props.onSubmit({ id, area }))
        .catch((err) => console.error(err));
    } else {
      alert("Ikke nok ledige pladser!");
    }
  };

  return (
    <form onSubmit={reserveSpot} id="spot">
      <label htmlFor="campsite">Område:</label>
      <select name="campsite" id="campsite" onChange={(e) => setArea(e.target.value)}>
        <option selected hidden>
          Vælg område
        </option>
        {props.data.map((camp, i) => {
          return (
            <option key={i} value={camp.area}>
              {camp.area}
            </option>
          );
        })}
      </select>
    </form>
  );
}
