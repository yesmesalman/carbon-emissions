"use client";

import { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import { useRouter } from "next/navigation";
import { PerformLogout } from "@/helpers";

const Sidebar = () => {
  const router = useRouter();
  const [currentActivePath, setCurrentActivePath] = useState(
    "/settings/profile_settings"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPathname = window.location.pathname;
      setCurrentActivePath(currentPathname);
    }
  }, []);

  const goToScreen = (e: string) => {
    router.push(e);
  };

  const onPressLogout = () => {
    PerformLogout(router);
  };

  return (
    <div
      className="nav flex-column nav-pills me-3"
      role="tablist"
      aria-orientation="vertical"
    >
      <button
        className={`nav-link ${styles.nav_link} ${
          currentActivePath === "/settings/profile_settings"
            ? "text-primary fw-bold"
            : "nav-link link-dark"
        } text-start`}
        type="button"
        role="tab"
        onClick={() => goToScreen("/settings/profile_settings")}
      >
        Profile Settings
      </button>
      <button
        className={`nav-link ${styles.nav_link} ${
          currentActivePath === "/settings/manage_users"
            ? "text-primary fw-bold"
            : "nav-link link-dark"
        } text-start`}
        type="button"
        role="tab"
        onClick={() => goToScreen("/settings/manage_users")}
      >
        Manage users
      </button>
      <button
        className={`nav-link ${styles.nav_link} link-dark text-start`}
        type="button"
        role="tab"
        onClick={onPressLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
