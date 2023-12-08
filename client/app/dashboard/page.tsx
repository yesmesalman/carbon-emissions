"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthenticatedScreen } from "@/helpers";
import Image from "next/image";

const PROJECT_PICTURES = [
  "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/0f4c8a89-e026-4521-9da9-ee42652f44dc",
  "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/27899f0e-badb-457c-aaea-111d1965f358.jpeg",
  "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/2f75fafc-579f-47b5-a320-aa1a21893165.jpeg",
  "https://evercity-carbon-public-store.s3.eu-central-1.amazonaws.com/35916011-eb02-4b5a-bf4e-7c8322f18204",
];

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
      <div className="row mt-4">
        <h5>Projects</h5>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3" key={`project`}>
          <div className="card">
            <Image
              src={PROJECT_PICTURES[0]}
              className="card-img-top"
              alt="Card Image"
              width="200"
              height="200"
            />
            <div className="card-body">
              <h5 className="card-title">asdfasdf</h5>
              <p className="card-text">asdfasdf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
