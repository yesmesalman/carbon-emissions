"use client";

import { useEffect, useState } from "react";
import HighlightedButtonRow from "../components/HighlightedButtonRow";
import axios from "axios";

const DashboardPage = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Project name",
      description: "This is a dummy card.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Project name",
      description: "This is a dummy card.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Project name",
      description: "This is a dummy card.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Project name",
      description: "This is a dummy card.",
    },
  ]);

  // const getData = () => {
  //   axios({
  //     method: "post",
  //     url: "/api/auth/login",
  //     data: {
  //       email: "salman@yahoo.com",
  //       password: "password1",
  //     },
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="container pt-4 pb-5">
      <div className="row">
        <HighlightedButtonRow
          title="Create and share your Project Idea Note"
          buttonText="Create New PIN"
          onButtonPress={() => {}}
        />
      </div>
      <div className="mt-4">
        <div className="row mb-2">
          <h2>Welcome to CE</h2>
        </div>
        <div className="row">
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
    </div>
  );
};

export default DashboardPage;
