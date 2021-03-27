import React from "react";
import Menu from "../../Menu/Menu";
import Balance from "../../Balance/Balance";

function DashboardReport() {
  return (
    <>
      <div className="grid-container2">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="report-container">
          <Balance />
        </div>
      </div>
    </>
  );
}

export default DashboardReport;
