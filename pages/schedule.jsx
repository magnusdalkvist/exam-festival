import OneScheduleTEST from "../components/OneScheduleTEST";

function schedule({ data }) {
  return (
    <div>
      <OneSchedule data={data} />
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
