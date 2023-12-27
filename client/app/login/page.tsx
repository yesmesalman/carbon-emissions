"use client";

import {
  CleanValidationMessages,
  HttpRequest,
  NonAuthenticatedScreen,
  ShowValidations,
  ShowWarningAlert,
  saveInLocalStorage,
} from "@/helpers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormAlerts from "../components/Form/FormAlerts";
import Button from "../components/Form/Button";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    NonAuthenticatedScreen(router);
  }, [router]);

  const onPressLogin = async () => {
    setLoading(true);

    const request = HttpRequest("/api/auth/login", {
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

        saveInLocalStorage("CONFIG", e?.data);
        router.push("/dashboard");
      })
      .catch((e) => {
        return ShowWarningAlert(e?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const navigateToRegister = () => {
    router.push("/register");
  };

  return (
    <div className="page-center">
      <div className="shadow p-3 mb-5 bg-white rounded p-5 d-flex flex-column justify-conent-center align-items-center w-25">
        <h3 className="mb-4">Login account v1</h3>
        <form className="w-100 d-flex flex-column justify-conent-center align-items-center">
          <div className="w-100">
            <FormAlerts />
          </div>
          <div className="w-100 form-group mb-3">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
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
            onClick={onPressLogin}
            label="Login Account"
            loading={loading}
          />
          <a className="text-center" href="#!" onClick={navigateToRegister}>
            Create an account instead
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
