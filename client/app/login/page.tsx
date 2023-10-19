"use client";

import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const navigateToDashbboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="page-center">
      <div className="shadow p-3 mb-5 bg-white rounded p-5 d-flex flex-column justify-conent-center align-items-center w-25">
        <h3 className="mb-5">Login account</h3>
        <form className="w-100 d-flex flex-column justify-conent-center align-items-center">
          <div className="w-100 form-group mb-3">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
              placeholder="******"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block w-100 mt-3 mb-3"
            onClick={navigateToDashbboard}
          >
            Login Account
          </button>
          <a className="text-center" href="">
            Create an account instead
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
