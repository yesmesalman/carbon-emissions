"use client";

import { useEffect } from "react";
import { AuthenticatedScreen } from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "./../screen";

const EmissionsPage = () => {
  const router = useRouter();

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  return (
    <Screen activeTabIndex={2}>
      <h3>Emissions</h3>
    </Screen>
  );
};

export default EmissionsPage;
