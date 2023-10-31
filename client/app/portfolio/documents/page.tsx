"use client";

import { useEffect } from "react";
import { AuthenticatedScreen } from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "../screen";

const OverviewPage = () => {
  const router = useRouter();

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  return (
    <Screen activeTabIndex={2}>
      <h3>Documents</h3>
    </Screen>
  );
};

export default OverviewPage;
