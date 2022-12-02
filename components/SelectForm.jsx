import { useState } from "react";

function SelectForm(props) {
  const [amount, setAmount] = useState("");

  return (
    <form>
      Area:
      <select name="campsite" id="campsite">
        {props.data.map((camp, i) => {
          return (
            <option key={i} value={camp.area}>
              {camp.area}
            </option>
          );
        })}
      </select>
      Amount:
      <input type="number" onChange={(e) => setAmount(e.target.value)} />
      <input type="submit" />
    </form>
  );
}

export default SelectForm;
