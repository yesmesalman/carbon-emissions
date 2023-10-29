"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../../components/Settings/Sidebar";
import { AuthenticatedScreen } from "@/helpers";
import { useRouter } from "next/navigation";

const ProfileSettingsPage = () => {
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
          { label: "Profile Settings", link: "" },
        ]}
      />

      <div className="container mt-5">
        <div className="d-flex align-items-start">
          <Sidebar />
          <div className="tab-content w-100">
            <div className="tab-pane fade show active">
              <h3 className="fw-bold">Profile Settings</h3>
              <form>
                <div className="form-group mb-2 mt-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group mb-2 mt-3">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                  />
                </div>
                <div className="form-group mb-2 mt-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="john@yahoo.com"
                  />
                </div>
                <div className="form-group mb-2 mt-3">
                  <button type="button" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
