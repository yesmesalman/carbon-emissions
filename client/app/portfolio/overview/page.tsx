"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AuthenticatedProjectScreen,
  AuthenticatedScreen,
  CleanValidationMessages,
  GetProjectPINScreen,
  HttpRequest,
  ShowValidations,
  ShowWarningAlert,
} from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "../screen";
import FormAlerts from "@/app/components/Form/FormAlerts";
import Button from "@/app/components/Form/Button";
import { ProjectCategoryProp } from "@/app/api/project/project-categories/route";
import countryList from "./../../../helpers/country-list";

const OverviewPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectCategories, setProjectCategories] = useState<number[]>([]);
  const [projectDescription, setProjectDescription] = useState("");
  const [projectAddress, setProjectAddress] = useState("");
  const [projectCountry, setProjectCountry] = useState("");
  const [projectLatitude, setProjectLatitude] = useState("");
  const [projectLongitude, setProjectLongitude] = useState("");
  const [projectChallange, setProjectChallange] = useState("");
  const [projectSolution, setProjectSolution] = useState("");
  const [projectTeam, setProjectTeam] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [projectHQAddress, setProjectHQAddress] = useState("");
  const [projectRegNumber, setProjectRegNumber] = useState("");
  const [projectYear, setProjectYear] = useState("");
  const [projectNoOfEmp, setProjectNoOfEmp] = useState("");
  const [projectAbout, setProjectAbout] = useState("");
  const [projectEmail, setProjectEmail] = useState("");
  const [projectPhone, setProjectPhone] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");

  const [categories, setCategories] = useState<ProjectCategoryProp[]>([]);

  useEffect(() => {
    const getData = () => {
      const request = HttpRequest("/api/project/project-categories", {});

      request.then((e) => e.json()).then((e) => setCategories(e.data));
    };

    return getData();
  }, []);

  useEffect(() => {
    AuthenticatedScreen(router);
    AuthenticatedProjectScreen(router);
  }, [router]);

  const onProjectCategoriesChange = (e: any) => {
    const value = e.target.value;
    setProjectCategories((prevItems) => {
      const index = prevItems.indexOf(value);

      if (index === -1) {
        return [...prevItems, value];
      } else {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        return updatedItems;
      }
    });
  };

  const onProjectImageChange = (event: any) => {};

  const onPressClose = () => {
    router.push("/portfolio/project");
  };

  const goToNextStep = useCallback(() => {
    return router.push(`/portfolio/documents?project=${GetProjectPINScreen()}`);
  }, [router]);

  const onPressNextStep = async () => {
    setLoading(true);

    const request = HttpRequest("/api/project/project-overview", {
      name: projectName,
      categories: projectCategories,
      description: projectDescription,
      address: projectAddress,
      country: projectCountry,
      latitude: projectLatitude,
      longitude: projectLongitude,
      challange: projectChallange,
      solution: projectSolution,
      team: projectTeam,
      details: projectDetails,
      headquarters_address: projectHQAddress,
      registration_number: projectRegNumber,
      year_established: projectYear,
      number_of_employees: projectNoOfEmp,
      about: projectAbout,
      email: projectEmail,
      phone: projectPhone,
      twitter,
      linkedin,
      facebook,
      project: GetProjectPINScreen(),
    });

    request
      .then((e) => e.json())
      .then((e) => {
        CleanValidationMessages();

        if (e?.message === "VALIDATION_ERROR") {
          return ShowValidations(e?.data);
        }

        if (!e?.success) {
          return ShowWarningAlert(e?.message);
        }

        goToNextStep();
      })
      .catch((e) => {
        return ShowWarningAlert(e?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Screen activeTabIndex={1}>
      <h3>Introduce your project</h3>
      <h6>
        Gain trust by describing your project in a structured way and making it
        visible for stakeholders.
      </h6>
      <div className="row">
        <FormAlerts />
      </div>

      <div className="row pb-4 mt-4">
        <h5 className="mb-0">Basic information</h5>
        <p className="text-light-black font-size-12">
          Write a clear, brief title and subtitle to help investors quickly
          understand your project.
        </p>
        <div className="row ml-8 pt-2">
          <div className="form-group mb-4">
            <label>Project name *</label>
            <input
              className="form-control"
              type="text"
              placeholder="Water and Climate VPA"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              id="project_name"
            />
          </div>
          <div className="form-group mb-4">
            <label id="project_categories">Project categories *</label>
            {categories.map((c, i) => (
              <div key={`p-c-${i}`} className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={c.id}
                  id={`p-c-${i}`}
                  onChange={onProjectCategoriesChange}
                />
                <label
                  className="form-check-label font-size-12"
                  htmlFor={`p-c-${i}`}
                >
                  {c.name}
                </label>
              </div>
            ))}
          </div>
          <div className="form-group mb-4">
            <label>Brief description *</label>
            <label className="warning-text">
              Briefly describe your project.
            </label>
            <textarea
              className="form-control"
              onChange={(e) => setProjectDescription(e.target.value)}
              id="project_description"
            >
              {projectDescription}
            </textarea>
          </div>
        </div>
      </div>

      <div className="row pb-4">
        <h5 className="mb-0">Project image</h5>
        <p className="text-light-black font-size-12">
          Add an image that will visually present your project on the platform.
        </p>
        <div className="row ml-8 pt-2">
          <div className="form-group mb-4">
            <label>Project image *</label>
            <input
              className="form-control"
              type="file"
              onChange={onProjectImageChange}
              id="project_image"
            />
          </div>
        </div>
      </div>

      <div className="row pb-4">
        <h5 className="mb-0">Project location</h5>
        <p className="text-light-black font-size-12">
          Enter project location details to raise transparency, receive risk and
          impact insights.
        </p>
        <div className="row ml-8 pt-2">
          <div className="form-group mb-4">
            <label>Address *</label>
            <input
              className="form-control"
              type="text"
              value={projectAddress}
              onChange={(e) => setProjectAddress(e.target.value)}
              id="project_address"
            />
          </div>
          <div className="form-group mb-4">
            <label>Country *</label>
            <label className="warning-text">
              In which country will the project be implemented?
            </label>
            <select
              className="form-control"
              onChange={(e) => setProjectCountry(e.target.value)}
              id="country"
            >
              <option key={`country-1`} value="">
                Select Country
              </option>
              {countryList.map((c) => (
                <option
                  key={`country-${c.value}`}
                  value={c.value}
                  selected={c.value === projectCountry}
                >
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="row pb-4">
        <h5 className="mb-0">Geographical coordinates</h5>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-4">
            <label>Latitude *</label>
            <input
              className="form-control"
              type="text"
              value={projectLatitude}
              onChange={(e) => setProjectLatitude(e.target.value)}
              id="project_latitude"
            />
          </div>
          <div className="form-group mb-4">
            <label>Longitude *</label>
            <input
              className="form-control"
              type="text"
              value={projectLongitude}
              onChange={(e) => setProjectLongitude(e.target.value)}
              id="project_longitude"
            />
          </div>
        </div>
      </div>

      <div className="row pb-4">
        <h5 className="mb-0">Project overview</h5>
        <p className="text-light-black font-size-12">
          Tell us more about your project, what it consists of, what challenge
          it solves and how.
        </p>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-4">
            <label>Challenge *</label>
            <textarea
              className="form-control"
              placeholder="Provide a summary description of how the Project is expected to generate GHG Reductions."
              onChange={(e) => setProjectChallange(e.target.value)}
              id="project_challange"
            >
              {projectChallange}
            </textarea>
          </div>
          <div className="form-group mb-4">
            <label>Solution *</label>
            <textarea
              className="form-control"
              placeholder="Please specify and explain the type of technology used in the Project. This may include: transfer of technology, history of this technology in the region/country/ area, experience in operating this technology, etc."
              onChange={(e) => setProjectSolution(e.target.value)}
              id="project_solution"
            >
              {projectSolution}
            </textarea>
          </div>
          <div className="form-group mb-4">
            <label>Team *</label>
            <textarea
              className="form-control"
              placeholder="Please provide brief description of organization."
              onChange={(e) => setProjectTeam(e.target.value)}
              id="project_team"
            >
              {projectTeam}
            </textarea>
          </div>
          <div className="form-group mb-4">
            <label>Project details *</label>
            <textarea
              className="form-control"
              placeholder="Provide a comprehensive project overview. You may use the following structure"
              onChange={(e) => setProjectDetails(e.target.value)}
              id="project_details"
            >
              {projectDetails}
            </textarea>
          </div>
        </div>
      </div>

      <div className="row pb-4">
        <h5 className="mb-0">Company info</h5>
        <p className="text-light-black font-size-12">Main information</p>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-4">
            <label>Headquarters address *</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setProjectHQAddress(e.target.value)}
              value={projectHQAddress}
              id="project_hq_address"
              placeholder="Address of organization."
            />
          </div>
          <div className="form-group mb-4">
            <label>Registration number *</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setProjectRegNumber(e.target.value)}
              value={projectRegNumber}
              id="project_register_number"
            />
          </div>
          <div className="form-group mb-4">
            <label>Year established *</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => setProjectYear(e.target.value)}
              value={projectYear}
              id="project_year"
            />
          </div>
          <div className="form-group mb-4">
            <label>Number of employees *</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setProjectNoOfEmp(e.target.value)}
              value={projectNoOfEmp}
              id="project_no_of_employee"
            />
          </div>
          <div className="form-group mb-4">
            <label>About *</label>
            <textarea
              className="form-control"
              onChange={(e) => setProjectAbout(e.target.value)}
              id="project_about"
              placeholder="Please include the website of your organization."
            >
              {projectAbout}
            </textarea>
          </div>
          <div className="form-group mb-4">
            <label>Email *</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setProjectEmail(e.target.value)}
              value={projectEmail}
              id="project_email"
              placeholder="E-mail of organization."
            />
          </div>
          <div className="form-group mb-4">
            <label>Phone *</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setProjectPhone(e.target.value)}
              value={projectPhone}
              id="project_phone"
              placeholder="Phone of organization."
            />
          </div>
          <div className="form-group mb-4">
            <label>Twitter</label>
            <input
              type="url"
              className="form-control"
              onChange={(e) => setTwitter(e.target.value)}
              value={twitter}
              id="twitter"
            />
          </div>
          <div className="form-group mb-4">
            <label>LinkedIn</label>
            <input
              type="url"
              className="form-control"
              onChange={(e) => setLinkedin(e.target.value)}
              value={linkedin}
              id="linkedin"
            />
          </div>
          <div className="form-group mb-4">
            <label>Facebook</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFacebook(e.target.value)}
              value={facebook}
              id="facebook"
            />
          </div>
        </div>
      </div>

      <div className="f-flex flex-row mt-4">
        <button
          onClick={onPressClose}
          type="button"
          className="btn btn-outline-primary"
        >
          Close
        </button>
        <Button
          className="btn btn-primary ml-8"
          onClick={onPressNextStep}
          label="Next Step"
          loading={loading}
        />
      </div>
    </Screen>
  );
};

export default OverviewPage;
