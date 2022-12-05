import OneSchedule from "../components/OneSchedule";

function schedule({ data }) {
  return (
    <div>
      <div className="schedule_grid">
        <h3>MIDGARD</h3>
        <h3>JOTUNHEIM</h3>
        <h3>VANAHEIM</h3>
        <OneSchedule data={data.Midgard} />
        <OneSchedule data={data.Jotunheim} />
        <OneSchedule data={data.Vanaheim} />
      </div>
    </div>
  );
}

export default schedule;

export async function getServerSideProps() {
  // Get data from api
  const day = "mon";
  const res = await fetch("http://localhost:8080/schedule/" + day);
  const data = await res.json();
  console.log(data);

  // Return the data inside props
  return {
    props: {
      data: data,
    },
  };
}
