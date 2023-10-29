"use client";

import { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../../components/Settings/Sidebar";
import { useRouter } from "next/navigation";
import { AuthenticatedScreen } from "@/helpers";

const ManageUsersPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  return (
    <div className="pt-4 pb-5">
      <Breadcrumb
        items={[
          { label: "Dashboard", link: "/dashboard" },
          { label: "Settings", link: "" },
          { label: "Manage Users", link: "" },
        ]}
      />

      <div className="container mt-5">
        <div className="d-flex align-items-start">
          <Sidebar />
          <div className="tab-content w-100">
            <div className="tab-pane fade show active">
              <h3 className="fw-bold">Manage Users</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersPage;
