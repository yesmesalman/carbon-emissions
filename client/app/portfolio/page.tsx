"use client";

import { useState } from "react";
import HighlightedButtonRow from "../components/HighlightedButtonRow";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const PortfolioPage = () => {
  return (
    <div className="pt-4 pb-5">
      <Breadcrumb
        items={[
          { label: "Porfolio", link: "/porfolio" },
          { label: "Carbon farming in City", link: "/porfolio" },
          { label: "Project Idea Note", link: "/porfolio" },
        ]}
      />
    </div>
  );
};

export default PortfolioPage;
