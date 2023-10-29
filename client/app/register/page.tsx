"use client";

import {
  CleanValidationMessages,
  HttpRequest,
  NonAuthenticatedScreen,
  ShowSuccessAlert,
  ShowValidations,
  ShowWarningAlert,
} from "@/helpers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormAlerts from "../components/Form/FormAlerts";
import Button from "../components/Form/Button";

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    NonAuthenticatedScreen(router);
  }, [router]);

  const onPressRegister = async () => {
    setLoading(true);

    const request = HttpRequest("/api/auth/register", {
      name,
      username,
      email,
      password,
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

        ShowSuccessAlert(e?.message);

        setTimeout(() => {
          router.push("/login");
        }, 1000);
      })
      .catch((e) => {
        return ShowWarningAlert(e?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const navigateToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="page-center">
      <div className="shadow p-3 mb-5 bg-white rounded p-5 d-flex flex-column justify-conent-center align-items-center w-25">
        <h3 className="mb-4">Create an account</h3>
        <form className="w-100 d-flex flex-column justify-conent-center align-items-center">
          <div className="w-100">
            <FormAlerts />
          </div>
          <div className="w-100 form-group mb-3">
            <label className="mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-100 form-group mb-3">
            <label className="mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-100 form-group mb-3">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-100 form-group">
            <label className="mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            className="w-100 mt-3 mb-3"
            onClick={onPressRegister}
            label="Create 🚀"
            loading={loading}
          />
          <a className="text-center" href="#!" onClick={navigateToLogin}>
            Already have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
