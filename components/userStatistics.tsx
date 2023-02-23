import styles from "../styles/stats.module.scss";
export default function UserStats() {
  //   console.log("user's email is", user);
  return (
    <div className={styles.statsContainer}>
      <div>
        <h4>25 pictures</h4>
        <h4>230 followers</h4>
        <h4>90 following</h4>
      </div>
    </div>
  );
}
