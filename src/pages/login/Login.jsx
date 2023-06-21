import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="row border shadow my-5 p-5">
        <div className="shapes col-md-6">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
        </div>
        <form className="col-md-6 ps-3">
          <h2 className="text-center mb-5">Login</h2>
          <label className="d-block mt-2" htmlFor="username">
            UserName
          </label>
          <input type="text" name="username" id="username" className="w-100" />
          <label className="d-block mt-2" htmlFor="password">
            Password
          </label>
          <input type="text" name="password" id="password" className="w-100" />
          <input
            className="btn btn-primary mt-5 d-block w-100"
            type="button"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
