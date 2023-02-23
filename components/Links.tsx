import styles from "../styles/links.module.scss";
import Link from "next/link";

export default function userLinks(props) {
  return (
    <div className={styles.linksContainer}>
      <h4>
        <Link href={"mailto:" + props.email}>{props.email}</Link>
      </h4>
      <h4>
        <Link href="#">{props.website}</Link>
      </h4>
      <h4>
        <Link href={"tel:" + props.phone}>{props.phone}</Link>
      </h4>
    </div>
  );
}
