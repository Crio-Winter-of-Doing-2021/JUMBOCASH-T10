import React from "react";
import Menu from "../../Menu/Menu";
import TransactionForm from "../../TransactionForm/TransactionForm";
import "./DashboardTransaction.css";

function DashboardTransaction() {
  return (
    <>
      <div className="grid-container">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="transaction-container">transactions</div>
        <div className="form-container">
          <TransactionForm />
        </div>
      </div>
    </>
  );
}

export default DashboardTransaction;
