import React from "react";

const Register = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" className="register-form">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            placeholder="Enter your first name"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
