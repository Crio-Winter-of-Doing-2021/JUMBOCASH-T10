import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/index.js";
import "./Logout.css";

function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutSuccessful = () => {
    localStorage.removeItem("logged_in_id");
    dispatch(logout());
    history.push("/");
  };

  const logoutUnsuccessful = () => {
    history.push("/dashboard");
  };

  return (
    <>
      <div className="button-container">
        <div>
          <h4>Do you really wish to log out??</h4>
        </div>
        <div>
          <button
            className="btn btn-primary button-items"
            onClick={logoutSuccessful}
          >
            Yes
          </button>
          <button
            className="btn btn-primary button-items"
            onClick={logoutUnsuccessful}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
}

export default Logout;
