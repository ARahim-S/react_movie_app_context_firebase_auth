import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const currentUser = { displayName: "ARahim" };
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to={"/"}>
            <h4> Best Movie App</h4>
          </Link>
          {currentUser ? (
            <div className="d-flex text-white align-items-center">
              <h5 className="mb-0 text-capitalize">
                {currentUser?.displayName}
              </h5>
              <button className="ms-2 btn btn-outline-light">Logout</button>
            </div>
          ) : (
            <div className="d-flex text-white align-items-center">
              <button className="ms-2 btn btn-outline-light">Login</button>
              <button className="ms-2 btn btn-outline-light">Register</button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
