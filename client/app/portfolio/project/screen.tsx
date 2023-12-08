"use client";

import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb";
import PINNaviagtion, { PINTabs } from "@/app/components/PIN/PINNavigation";
import PINProgress from "@/app/components/PIN/PINProgress";

type ScreenProps = {
  children: any;
  activeTabIndex: number;
};

const Screen = (props: ScreenProps) => {
  const { children, activeTabIndex } = props;

  return (
    <div className="container pt-4 pb-5">
      <div className="row mb-2">
        <Breadcrumb
          items={[
            { label: "Dashboard", link: "/dashboard" },
            { label: "Porfolio", link: "/portfolio" },
            { label: "Project Idea Note", link: "" },
          ]}
        />
      </div>
      <div className="row mt-3">
        <PINNaviagtion activeIndex={activeTabIndex} tabs={PINTabs} />
      </div>
      <div className="row mt-3">
        <div className="col-9">{children}</div>
        <div className="col-3">
          <PINProgress />
        </div>
      </div>
    </div>
  );
};

export default Screen;
