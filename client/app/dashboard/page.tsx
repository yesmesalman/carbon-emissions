"use client";

import { useEffect, useState } from "react";
import HighlightedButtonRow from "../components/HighlightedButtonRow";
import { useRouter } from "next/navigation";
import { AuthenticatedScreen } from "@/helpers";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  return (
    <div className="container pt-4 pb-5">
      <div className="row mb-4">
        <h2>Welcome to CE</h2>
      </div>
    </div>
  );
};

export default DashboardPage;
