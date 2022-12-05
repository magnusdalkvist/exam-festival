function OneSchedule(props) {
  return (
    <div>
      {props.data.map((e, i) => {
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
