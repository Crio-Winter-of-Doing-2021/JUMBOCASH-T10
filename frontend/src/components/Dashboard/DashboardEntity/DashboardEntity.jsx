import React from "react";
import Menu from "../../Menu/Menu";
import EntityForm from "../../EntityForm/EntityForm";
import Entities from "../../Entities/Entities";
import "../Dashboard.css";
import { useState } from "react";

function DashboardEntity() {
  const [currentId, setCurrentId] = useState(null);

  return (
    <>
      <div className="grid-container1">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="entity-container">
          <Entities setCurrentId={setCurrentId} />
        </div>
        <div className="form-container">
          <EntityForm currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </>
  );
}

export default DashboardEntity;
