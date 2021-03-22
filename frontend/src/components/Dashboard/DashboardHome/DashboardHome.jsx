import React from "react";
import Menu from "../../Menu/Menu";

function DashboardHome() {
  return (
    <>
      <div className="grid-container2">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="dashboard-container">home</div>
      </div>
    </>
  );
}

export default DashboardHome;
