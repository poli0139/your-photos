import Image from "next/image";
import Avatar from "../public/assets/images/placeholder-img.jpg";
import Logo from "../public/assets/images/yourphotos-logo-black.png";
import Icon from "../public/assets/images/icon.svg";
import styles from "../styles/nav.module.scss";
import Link from "next/link";
export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navHead}>
        <div className={styles.logo}>
          <Link href="/home">
            <Image src={Logo} alt=""></Image>
          </Link>
        </div>

        <div className={styles.icon}>
          <Link href="/account">
            <Image src={Icon}></Image>
          </Link>
        </div>
      </div>

      <div className={styles.avatar}>
        <Image src={Avatar} alt=""></Image>
      </div>
    </div>
  );
}
