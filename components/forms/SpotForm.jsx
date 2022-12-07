import { useState } from "react";
import { Radio } from "@nextui-org/react";

export default function SpotForm(props) {
  // let id;

  // const reserveSpot = async (e) => {
  //   e.preventDefault();
  //   const selectedArea = (selected) => {
  //     return selected.area === area;
  //   };

  //   if (props.data.find(selectedArea).available > 0) {
  //     const options = {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ area: area, amount: 1 }),
  //     };

  //     fetch("http://localhost:8080/reserve-spot", options)
  //       .then((response) => response.json())
  //       .then((response) => (id = response.id))
  //       .then(() => props.onSubmit({ id, area }))
  //       .catch((err) => console.error(err));
  //   } else {
  //     alert("Ikke nok ledige pladser!");
  //   }
  // };

  return (
    <Radio.Group aria-label="spots" orientation="vertical" onChange={(e) => props.selection(e)}>
      {props.data.map((spot, i) => {
        return (
          <Radio size="sm" key={i} value={spot.area}>
            {spot.area}
          </Radio>
        );
      })}
    </Radio.Group>
  );
}
