"use client";

import { useEffect } from "react";
import { AuthenticatedScreen } from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "./../screen";

const BenefitsPage = () => {
  const router = useRouter();

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  return (
    <Screen activeTabIndex={3}>
      <h3>Benefits</h3>
    </Screen>
  );
};

export default BenefitsPage;