import styles from "../styles/Schedule.module.css";
import OneSchedule from "../components/OneSchedule";
import { useState, useEffect, useRef } from "react";
import React from "react";

function schedule() {
  const [selectDay, setSelectDay] = useState("mon");
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const url = "http://localhost:8080/schedule/";
  const [data, setData] = useState([]);

  //SCROLL
  const ref = useState([]);
  let ref0 = React.useRef();
  let ref1 = React.useRef();
  let ref2 = React.useRef();
  let ref3 = React.useRef();
  let ref4 = React.useRef();
  let ref5 = React.useRef();
  let ref6 = React.useRef();

  useEffect(() => {
    fetch(url + selectDay).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, [selectDay]);

  //SCROLL
  const onDayChange = (day) => {
    setSelectDay(day.substring(0, 3));
  };

  function scrollTo(ref) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  return (
    <div>
      <div className={styles.daypicker}>
        {/* <button
          key={0}
          ref={ref0}
          className={styles.daysbtn}
          onClick={function () {
            onDayChange("mon");
            scrollTo(ref0);
          }}
        >
          Monday
        </button>
        <button
          key={1}
          ref={ref1}
          className={styles.daysbtn}
          onClick={function () {
            onDayChange("tue");
            scrollTo(ref1);
          }}
        >
          Tuesday
        </button>
        <button
          key={2}
          ref={ref2}
          className={styles.daysbtn}
          onClick={function () {
            onDayChange("wed");
            scrollTo(ref2);
          }}
        >
          Wednesday
        </button>
        <button
          key={3}
          ref={ref3}
          className={styles.daysbtn}
          onClick={function () {
            onDayChange("thu");
            scrollTo(ref3);
          }}
        >
          Thursday
        </button>
        <button
          key={4}
          ref={ref4}
          className={styles.daysbtn}
          onClick={function () {
            onDayChange("fri");
            scrollTo(ref4);
          }}
        >
          Friday
        </button>
        <button
          key={5}
          ref={ref5}
          className={styles.daysbtn}
          onClick={function () {
            onDayChange("sat");
            scrollTo(ref5);
          }}
        >
          Saturday
        </button>
        <button
          key={6}
          ref={ref6}
          className={styles.daysbtn}
          onClick={function () {
            onDayChange("sun");
            scrollTo(ref6);
          }}
        >
          Sunday
        </button> */}
        {days.map((day, i) => (
          <button
            key={i}
            ref={ref[i]}
            className={styles.daysbtn}
            onClick={function () {
              console.log(i);
              onDayChange(day);
              scrollTo(ref[i]);
            }}
          >
            {day.substring(0, 1).toUpperCase() + day.substring(1, day.length)}
          </button>
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

{
  /* <div id="dayPicker">
{days.map((day, index) => (
  <button onClick={() => onDayChange(day)}>{day.substring(0, 1).toUpperCase() + day.substring(1, day.length)}</button>
))}
</div> */
}

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
