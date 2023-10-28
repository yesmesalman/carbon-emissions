"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

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
              <span className="text-white ml-2">Salman Saleem</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
