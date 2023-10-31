"use client";
import { RiDashboardFill } from "react-icons/ri";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { GrTextAlignLeft } from "react-icons/gr";
import { HiLogout } from "react-icons/hi";
import styles from "./Sidebar.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PerformLogout } from "@/helpers";

const Sidebar = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentActivePath, setCurrentActivePath] = useState(
    window.location.pathname ?? "/dashboard"
  );

  useEffect(() => {
    var currentPathname = window.location.pathname;
    setCurrentActivePath(currentPathname);
  }, []);

  const navigateToDashbboard = () => {
    setCurrentActivePath("/dashboard");
    router.push("/dashboard");
  };

  const navigateToPortfolio = () => {
    setCurrentActivePath("/portfolio");
    router.push("/portfolio");
  };

  const onPressLogout = () => {
    PerformLogout(router);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 sidebar"
      style={{ width: sidebarOpen ? `220px` : `76px` }}
    >
      <div
        className={styles.closeContainer}
        onClick={() => setSidebarOpen((e) => !e)}
      >
        {sidebarOpen ? (
          <AiOutlineClose size="28" />
        ) : (
          <GrTextAlignLeft size="18" />
        )}
      </div>
      <ul className="nav nav-pills flex-column mb-auto mt-10">
        <li
          className="user-select-none border-bottom"
          onClick={navigateToDashbboard}
        >
          <a
            href="#"
            className={`nav-link ${
              currentActivePath === "/dashboard" ? "active" : "link-dark"
            }`}
          >
            <RiDashboardFill size="22" />
            {sidebarOpen && <span>Dashboard</span>}
          </a>
        </li>
        <li className="user-select-none" onClick={navigateToPortfolio}>
          <a
            href="#"
            className={`nav-link ${
              currentActivePath === "/portfolio" ? "active" : "link-dark"
            }`}
          >
            <HiMiniSquare2Stack size="22" />
            {sidebarOpen && <span>Portfolio</span>}
          </a>
        </li>
        <li className="user-select-none border-top" onClick={onPressLogout}>
          <a href="#" className="nav-link link-dark">
            <HiLogout size="24" />
            {sidebarOpen && <span>Logout</span>}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;