function OneSchedule(props) {
  return (
    <div>
      {props.data.map((e, i) => {
        return (
          <div className="schedule_act" key={i}>
            <h2>{e.act}</h2>
            <p>
              Time: {e.start} - {e.end}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default OneSchedule;
