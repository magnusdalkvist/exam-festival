import styles from "../styles/Schedule.module.css";
import OneSchedule from "../components/OneSchedule";
import { useState, useEffect } from "react";

function schedule({ data }) {
  const [selectDay, setSelectDay] = useState("mon");
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const url = "http://localhost:8080/schedule/";
  const [Data2, setData] = useState([]);
  useEffect(() => {
    fetch(url + selectDay).then((result) => {
      result.json().then((resp) => {
        setData(resp);
        setLoading(false);
      });
    });
  }, [Data2]);

  return (
    <div>
      <div id="dayPicker">
        {days.map((day, index) => (
          <label key={index + 1} className="button-days">
            {day.substring(0, 1).toUpperCase() + day.substring(1, day.length)}
            <input type="radio" name="days" id={day} onClick={() => onDayChange(day)} defaultChecked={day.substring(0, 3) === "mon"} />
          </label>
        ))}
      </div>
      <div className={styles.schedule_grid}>
        <div className={styles.div1}>
          <OneSchedule data={data.Midgard} />
        </div>
        <div className={styles.div2}>
          <OneSchedule data={data.Jotunheim} />
        </div>
        <div className={styles.div3}>
          <OneSchedule data={data.Vanaheim} />
        </div>
        <div className={styles.div4}>
          <h3>MIDGARD</h3>
        </div>
        <div className={styles.div5}>
          <h3>JOTUNHEIM</h3>
        </div>
        <div className={styles.div6}>
          <h3>VANAHEIM</h3>
        </div>
        <div className={styles.div7}>
          <h4>00:00</h4>
        </div>
        <div className={styles.div8}>
          <h4>02:00</h4>
        </div>
        <div className={styles.div9}>
          <h4>04:00</h4>
        </div>
        <div className={styles.div10}>
          <h4>06:00</h4>
        </div>
        <div className={styles.div11}>
          <h4>08:00</h4>
        </div>
        <div className={styles.div12}>
          <h4>10:00</h4>
        </div>
        <div className={styles.div13}>
          <h4>12:00</h4>
        </div>
        <div className={styles.div14}>
          <h4>14:00</h4>
        </div>
        <div className={styles.div15}>
          <h4>16:00</h4>
        </div>
        <div className={styles.div16}>
          <h4>18:00</h4>
        </div>
        <div className={styles.div17}>
          <h4>20:00</h4>
        </div>
        <div className={styles.div18}>
          <h4>22:00</h4>
        </div>
      </div>
    </div>
  );
}

export default schedule;

// export async function getServerSideProps() {
//   // Get data from api
//   const day = "mon";
//   const res = await fetch("http://localhost:8080/schedule/" + day);
//   const data = await res.json();
//   console.log(data);

//   // Return the data inside props
//   return {
//     props: {
//       data: data,
//     },
//   };
// }

// export async function getStaticProps() {
//   // Get data from api
//   const day = "mon";
//   const res = await fetch("http://localhost:8080/schedule/" + day);
//   const data = await res.json();
//   console.log(data);

//   // Return the data inside props
//   return {
//     props: {
//       data: data,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((obj) => {
//     return { params: { slug: obj } };
//   });
//   const url = "http://localhost:8080/schedule/";
//   const res = await fetch(url);
//   const data = await res.json();

//   const paths = data;

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }
