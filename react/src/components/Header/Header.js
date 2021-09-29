import React from "react";
import logo from "../../Assets/Logos/logo.jpg";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");
  const logout = () => {
    localStorage.clear();
  };

  return (
    <div className="row">
      <nav className="navbar-dark bg-dark d-flex flex-row flex-wrap ">
        <img src={logo} alt="hello" />
        {token && (
          <Link to="/home" className="text">
            <h5 className="text-muted p-3">Tutorial</h5>
          </Link>
        )}
        {userType === "admin" && (
          <Link to="/add" className="text">
            <h5 className="text-muted  p-3">Add</h5>
          </Link>
        )}
        {token && (
          <Link to="/" className="text">
            <h5 className="text-muted  p-3" onClick={logout}>
              Logout
            </h5>
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Header;
