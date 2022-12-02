import CampSites from "../components/CampSites";
import SelectForm from "../components/SelectForm";

function booking({ data }) {
  console.log(data);
  return (
    <div>
      <h1>Booking</h1>
      <CampSites data={data} />
      <SelectForm data={data} />
    </div>
  );
}

export default booking;

export async function getServerSideProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/available-spots/");
  const data = await res.json();
  console.log(data);

  // Return the data inside props
  return {
    props: {
      data,
    },
  };
}
