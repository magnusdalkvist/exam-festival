import { Link } from "@nextui-org/react";

function OneSchedule(props) {
  console.log(props.bandData);
  // const jatak = entry.bandData[i].name.toLowerCase().trim().replaceAll(" ", "-");
  return (
    <div>
      {props.data?.map((e, i) => {
        return (
          <div className="act" key={i}>
            <h2>{e.act}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default OneSchedule;
