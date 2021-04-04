import React from "react";
import Menu from "../../Menu/Menu";
import Balance from "../../Balance/Balance";
import Charts from "../../Charts/Charts";
import Favourites from "../../Favourites/Favourites";

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
          <Favourites />
        </div>
      </div>
    </>
  );
}

export default DashboardReport;
