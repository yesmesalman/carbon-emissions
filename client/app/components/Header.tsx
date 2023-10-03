import Link from "next/link";
import styles from "./Header.module.css";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header_inner}`}>
        <div className={styles.logo_container}>
          <Link href="/">
            <span className={styles.logo}>CE</span>
          </Link>
        </div>
        <div className={styles.header_right}>
          <div className={styles.header_btn}>
            <BiSolidUserCircle color="white" size="30" />
            <span className="text-white ml-2">Salman Saleem</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
