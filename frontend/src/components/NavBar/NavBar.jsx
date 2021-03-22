import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useSelector } from "react-redux";
import profile_pic from "./profile_pic.png";

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark navbar-template">
        <div className="template">
          <div className="items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-wallet"
              viewBox="0 0 16 16"
            >
              <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
            </svg>
          </div>
          {isLoggedIn ? (
            <>
              <div className="items">
                <img
                  src={profile_pic}
                  alt="user"
                  style={{ height: "40px", width: "40px" }}
                />
              </div>
              <div className="items">{user.username}</div>
            </>
          ) : (
            <div className="items">Cash-Management Application</div>
          )}
        </div>
        <div className="template">
          <div>
            <Link to="/" exact className="items">
              {isLoggedIn ? "Dashboard" : "Home"}
            </Link>
          </div>
          <div>
            <Link to="/sign-in" exact className="items">
              {isLoggedIn ? "Logout" : "Sign Up/Sign in"}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
