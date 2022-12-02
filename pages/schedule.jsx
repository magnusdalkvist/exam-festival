function schedule({ data }) {
  console.log("data " + data);
  return <div>schedule</div>;
}

export default schedule;

export async function getServerSideProps() {
  // Get data from api
  const res = await fetch("http://localhost:8080/schedule/");
  const data = await res.json();
  console.log(data);

  // Return the data inside props
  return {
    props: {
      data: data,
    },
  };
}
