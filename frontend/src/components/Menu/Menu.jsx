import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <>
      <div className="button-group-vertical menu">
        <Link to="/dashboard">
          <button type="button" className="btn btn-dark menu-button">
            Home
          </button>
        </Link>
        <Link to="/dashboard/transaction">
          <button type="button" className="btn btn-dark menu-button">
            Transactions
          </button>
        </Link>
        <Link to="/dashboard/entity">
          <button type="button" className="btn btn-dark menu-button">
            Entities
          </button>
        </Link>
        <Link to="/dashboard/report">
          <button type="button" className="btn btn-dark menu-button">
            Reports
          </button>
        </Link>
      </div>
    </>
  );
}

export default Menu;
