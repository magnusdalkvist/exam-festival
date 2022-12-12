import { Link } from "@nextui-org/react";
import styles from "../styles/Schedule.module.css";

function OneSchedule(props) {
  console.log(props.bandData);

  return (
    <div>
      {props.data?.map((e, i) => {
        const link = e.act.toLowerCase().split(" ").join("_");
        return (
          <div className={styles.act} key={i}>
            <Link href={"/artists/" + link}>
              <h2>{e.act}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default OneSchedule;
