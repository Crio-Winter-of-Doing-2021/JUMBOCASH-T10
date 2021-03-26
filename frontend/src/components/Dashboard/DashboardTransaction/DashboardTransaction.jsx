import React from "react";
import Menu from "../../Menu/Menu";
import TransactionForm from "../../TransactionForm/TransactionForm";
import "../Dashboard.css";
import Transactions from "../../Transactions/Transactions";
import { get_entityList } from "../../../api/index.js";
import { useEffect, useState } from "react";

function DashboardTransaction() {
  const [entityList, setentityList] = useState([]);

  useEffect(() => {
    const id = localStorage.logged_in_id;
    if (id != null) {
      get_entityList(id).then((items) => {
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
          <Transactions />
        </div>
        <div className="form-container">
          <TransactionForm entityList={entityList} />
        </div>
      </div>
    </>
  );
}

export default DashboardTransaction;
