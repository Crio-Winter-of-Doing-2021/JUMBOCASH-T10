import React from "react";
import Menu from "../../Menu/Menu";
import TransactionForm from "../../TransactionForm/TransactionForm";
import "../Dashboard.css";
import Transactions from "../../Transactions/Transactions";
import { get_entityList } from "../../../api/index.js";
import { useEffect, useState } from "react";

function DashboardTransaction() {
  const [entityList, setentityList] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    const id = localStorage.logged_in_id;
    if (id != null) {
      get_entityList().then((items) => {
        setentityList(items);
      });
    }
  }, []);

  return (
    <>
      <div className="grid-container1">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="transaction-container">
          <Transactions setCurrentId={setCurrentId} />
        </div>
        <div className="form-container">
          <TransactionForm
            entityList={entityList}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
        </div>
      </div>
    </>
  );
}

export default DashboardTransaction;
