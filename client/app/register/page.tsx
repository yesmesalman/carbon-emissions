"use client";

import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();

  const navigateToDashbboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="page-center">
      <div className="shadow p-3 mb-5 bg-white rounded p-5 d-flex flex-column justify-conent-center align-items-center w-25">
        <h3 className="mb-5">Create new account</h3>
        <form className="w-100">
          <div className="form-group mb-3">
            <label className="mb-2" htmlFor="name">
              Full Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group mb-3">
            <label className="mb-2" htmlFor="username">
              Username
            </label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="form-group mb-3">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
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
            className="btn btn-primary btn-lg btn-block w-100 mt-5"
            onClick={navigateToDashbboard}
          >
            Create 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
