"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { GetLoggedInUser } from "@/helpers";

const Header = () => {
  const router = useRouter();
  const user = GetLoggedInUser();

  const goToSettings = () => {
    router.push("/settings");
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header_inner}`}>
        <nav
          className={`navbar navbar-light bg-light justify-content-between ${styles.nav}`}
        >
          <div className={styles.logo_container}>
            <Link href="/">
              <span className={styles.logo}>CE</span>
            </Link>
          </div>
          <div className="form-inline">
            <div className={styles.header_btn} onClick={goToSettings}>
              <BiSolidUserCircle color="white" size="30" />
              <span className="text-white ml-4">{user?.name}</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
