"use client";

import { useEffect, useState } from "react";
import { AuthenticatedScreen, HttpRequest } from "@/helpers";
import { useRouter } from "next/navigation";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import HighlightedButtonRow from "../components/HighlightedButtonRow";
import { MdOutlineEdit } from "react-icons/md";

const PortfolioPage = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

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
    return router.push("/portfolio/project");
  };

  const onPressEditProject = (project: any) => {
    return router.push(`/portfolio/project?project=${project.code}`);
  };

  return (
    <div className="container pt-4 pb-5">
      <div className="row mb-2">
        <Breadcrumb
          items={[
            { label: "Dashboard", link: "/dashboard" },
            { label: "My Porfolio", link: "" },
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
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Project name</th>
              <th scope="col">Category</th>
              <th scope="col">Location</th>
              <th scope="col">Financing</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, index) => (
              <tr key={`project-${index}`}>
                <td>New carbon project</td>
                <td>
                  <div className="d-flex flex-column align-items-start">
                    <div className="badge badge-outline-primary">Energy</div>
                    <div className="badge badge-outline-primary mt-1">
                      Energy Efficiency
                    </div>
                  </div>
                </td>
                <td>Karachi, Pakistan</td>
                <td>
                  <div className="d-flex flex-column align-items-start">
                    <div className="badge badge-primary font-size-12">
                      Draft
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex flex-column align-items-start">
                    <div className="badge badge-outline-primary font-size-14">
                      {p.step}/6 Completed
                    </div>
                  </div>
                </td>
                <td>
                  <div role="button" onClick={() => onPressEditProject(p)}>
                    <MdOutlineEdit size={16} />
                    <span className="font-size-14 ml-2">Edit</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioPage;
