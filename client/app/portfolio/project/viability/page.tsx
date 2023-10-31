"use client";

import { useEffect } from "react";
import { AuthenticatedScreen } from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "./../screen";

const ViabilityPage = () => {
  const router = useRouter();

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  return (
    <Screen activeTabIndex={4}>
      <h3>Viability</h3>
    </Screen>
  );
};

export default ViabilityPage;
