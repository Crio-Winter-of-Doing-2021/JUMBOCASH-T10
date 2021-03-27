import React from "react";
import Menu from "../../Menu/Menu";
import Balance from "../../Balance/Balance";
import Charts from "../../Charts/Charts";

function DashboardReport() {
  return (
    <>
      <div className="grid-container2">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="report-container">
          <Balance />
          <Charts />
        </div>
      </div>
    </>
  );
}

export default DashboardReport;
