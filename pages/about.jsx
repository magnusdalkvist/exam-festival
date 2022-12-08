import styles from "../styles/About.module.css";

function about() {
  return (
    <div>
      <div className={styles.main}>
        <h1 className={styles.h1}>ABOUT US</h1>
        <div className={styles.divGrid}>
          <div className={styles.info1}>
            <h3>Overskrift</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam. Molestias, placeat quam! Saepe aliquam sapiente, accusantium hic corrupti sit cum enim harum, omnis nisi quam
              illo possimus?
            </p>
          </div>
          <div className={styles.info2}>
            <h3>Overskrift</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam. Molestias, placeat quam! Saepe aliquam sapiente, accusantium hic corrupti sit cum enim harum, omnis nisi quam
              illo possimus?
            </p>
          </div>
          <div className={styles.info3}>
            <h3>Overskrift</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam. Molestias, placeat quam! Saepe aliquam sapiente, accusantium hic corrupti sit cum enim harum, omnis nisi quam
              illo possimus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
