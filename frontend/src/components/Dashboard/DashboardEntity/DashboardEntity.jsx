import React from "react";
import Menu from "../../Menu/Menu";
import EntityForm from "../../EntityForm/EntityForm";
import "../Dashboard.css";

function DashboardEntity() {
  return (
    <>
      <div className="grid-container1">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="entity-container">entities</div>
        <div className="form-container">
          <EntityForm />
        </div>
      </div>
    </>
  );
}

export default DashboardEntity;
