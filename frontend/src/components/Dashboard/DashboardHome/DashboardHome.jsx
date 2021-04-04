import React from "react";
import Menu from "../../Menu/Menu";

function DashboardHome() {
  return (
    <>
      <div className="grid-container2">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="dashboard-container">
          <div
            className="home-container"
            stle={{ position: "fixed", top: "1px" }}
          >
            <div
              className="home-template"
              style={{ width: "70%", position: "fixed", top: "2em" }}
            >
              <h3>Cashflow Management System</h3>
              <h5>Welcome To Cashflow Management Application.</h5>
              <h5>➙ Head Over to Entities Section to add a new Entity.</h5>
              <h5>
                ➙ Head Over to Transactions Section to create a new Transaction.
              </h5>
              <h5>➙ Head Over to Reports Section to view detailed insights.</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
