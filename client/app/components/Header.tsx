"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import { GetLoggedInUser } from "@/helpers";
import DEFAULT_IMAGE from "./../../assets/images/DEFAULT.jpg";
import Image from "next/image";
import { useUser } from "@/Contexts/UserContext";

const Header = () => {
  const { user } = useUser();
  // console.log("useruser", user)
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
              <Image
                className={styles.header_profile_image}
                src={
                  user?.profile_picture ? user.profile_picture : DEFAULT_IMAGE
                }
                alt={user?.name ?? ""}
                width={30}
                height={30}
              />
              <span className="text-white text-capitalize ml-8">
                {user?.name}
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
