function OneSchedule(props) {
  const data = props.data;
  const arr = data.isArray();
  console.log(arr);
  return (
    <div>
      {arr.map((e, i) => {
        return <div key={i}></div>;
      })}
    </div>
  );
}

export default OneSchedule;
