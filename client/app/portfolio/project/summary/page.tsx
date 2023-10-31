"use client";

import { useEffect } from "react";
import { AuthenticatedScreen } from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "./../screen";

const CreatePage = () => {
  const router = useRouter();

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  return (
    <Screen activeTabIndex={0}>
      <h3>Summary</h3>
    </Screen>
  );
};

export default CreatePage;
