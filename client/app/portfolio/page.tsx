"use client";

import { useEffect, useState } from "react";
import HighlightedButtonRow from "../components/HighlightedButtonRow";
import { AuthenticatedScreen } from "@/helpers";
import { useRouter } from "next/navigation";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const PortfolioPage = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/0f4c8a89-e026-4521-9da9-ee42652f44dc",
      title: "Project name",
      description: "This is a dummy card.",
    },
    {
      id: 2,
      image: "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/27899f0e-badb-457c-aaea-111d1965f358.jpeg",
      title: "Project name",
      description: "This is a dummy card.",
    },
    {
      id: 3,
      image: "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/2f75fafc-579f-47b5-a320-aa1a21893165.jpeg",
      title: "Project name",
      description: "This is a dummy card.",
    },
    {
      id: 4,
      image: "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/35916011-eb02-4b5a-bf4e-7c8322f18204",
      title: "Project name",
      description: "This is a dummy card.",
    },
  ]);

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  const onPressCreateNewPIN = () => {
    router.push("/portfolio/project");
  };

  return (
    <div className="container pt-4 pb-5">
      <div className="row mb-2">
        <Breadcrumb
          items={[
            { label: "Dashboard", link: "/dashboard" },
            { label: "Porfolio", link: "" },
          ]}
        />
      </div>
      <div className="row">
        <HighlightedButtonRow
          title="Create and share your Project Idea Note"
          buttonText="Create New PIN"
          onButtonPress={onPressCreateNewPIN}
        />
      </div>
      <div className="row mt-4">
        {projects.map((p) => (
          <div className="col-md-3 mb-3" key={`project-${p.id}`}>
            <div className="card">
              <img src={p.image} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
