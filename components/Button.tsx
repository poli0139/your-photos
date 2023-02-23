import { useState } from "react";
import styles from "@/styles/button.module.scss";

export default function FollowButton() {
  const [follow, setFollow] = useState(false);

  function handleChange() {
    setFollow((follow) => !follow);
    console.log("follow is", follow);
  }

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleChange}>
        Follow
      </button>
    </div>
  );
}
