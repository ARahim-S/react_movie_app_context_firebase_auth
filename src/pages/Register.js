import { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" className="register-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value={"Register"}
            //onClick={handleSubmit} If you send the data with onclick like that, "required" properties doesn't work. If you want to work required fields , please use onsubmit event at the form and change type of the input to the submit
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
