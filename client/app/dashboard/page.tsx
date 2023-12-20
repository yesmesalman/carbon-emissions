"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthenticatedScreen, HttpRequest } from "@/helpers";
import Image from "next/image";
import HighlightedButtonRow from "../components/HighlightedButtonRow";
import DashboardFilter from "../components/Dashboard/DashboardFilter";
import styles from "./dashboard.module.css";
import { ProjectProp } from "../api/project/get-projects/route";

const PROJECT_PICTURES = [
  "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/0f4c8a89-e026-4521-9da9-ee42652f44dc",
  "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/27899f0e-badb-457c-aaea-111d1965f358.jpeg",
  "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/2f75fafc-579f-47b5-a320-aa1a21893165.jpeg",
  "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/35916011-eb02-4b5a-bf4e-7c8322f18204",
];

const DashboardPage = () => {
  const router = useRouter();
  const [filters, setFilters] = useState<number[]>([]);
  const [projects, setProjects] = useState<ProjectProp[]>([]);

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  useEffect(() => {
    const getData = () => {
      const request = HttpRequest("/api/project/get-projects", {});
      request.then((e) => e.json()).then((e) => setProjects(e?.data));
    };

    return getData();
  }, []);

  const onPressCreateNewPIN = () => {
    router.push("/portfolio/project");
  };

  return (
    <div className="container pt-4 pb-5">
      <div className="row mb-2">
        <h2>Welcome to CE</h2>
      </div>
      <div className="row mb-4">
        <HighlightedButtonRow
          title="Create and share your Project Idea Note"
          buttonText="Create New PIN"
          onButtonPress={onPressCreateNewPIN}
          style={true}
        />
      </div>
      <DashboardFilter filters={filters} setFilters={setFilters} />
      <div className="row mt-4 mb-2">
        <h5>Projects</h5>
      </div>
      <div className="row">
        {projects.map((p, index) => (
          <div className="col-md-4 mb-3" key={`project-${index}`}>
            <div className="card" style={{ height: "100%" }}>
              <Image
                src={PROJECT_PICTURES[Math.floor(Math.random() * 3)]}
                className="card-img-top"
                alt="Card Image"
                width="200"
                height="200"
              />
              <div className="card-body">
                <h6 className="card-title font-size-14 font-weight-bold">
                  {p?.PorjectOverview?.[0]?.name
                    ? p?.PorjectOverview?.[0]?.name
                    : "New carbon project"}
                </h6>
                {p?.PorjectOverview?.[0]?.address && (
                  <span className="font-size-14 text-black-light">
                    {p?.PorjectOverview?.[0]?.address}
                  </span>
                )}
                {p?.PorjectOverview?.[0]?.description && (
                  <div className={styles.project_description}>
                    <p
                      className={`card-text mt-4 font-size-12 text-black-light ${styles.project_description_text}`}
                    >
                      {p?.PorjectOverview?.[0]?.description}
                    </p>
                  </div>
                )}
                <div className="mt-2">
                  {p?.PorjectOverviewCategories?.length > 0 && (
                    <>
                      {p.PorjectOverviewCategories.map((c) => (
                        <div
                          className="badge badge-outline-primary mr-4"
                          key={`category-${c.id}`}
                        >
                          <span className="font-size-10">
                            {c?.Category?.name}
                          </span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
