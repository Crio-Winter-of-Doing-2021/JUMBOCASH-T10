import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card } from "@material-ui/core";
import { useSelector } from "react-redux";

function Charts() {
  const transactions = useSelector((state) => state.transactions.transaction);

  let credit_amt = 0,
    debit_amt = 0,
    upi_amt = 0,
    cash_amt = 0,
    creditdebit_amt = 0;

  for (let transaction of transactions) {
    if (transaction.transactionType === "Credit")
      credit_amt += Number(transaction.amount);
    else debit_amt += Number(transaction.amount);

    if (transaction.paymentMode === "UPI")
      upi_amt += Number(transaction.amount);
    else if (transaction.paymentMode === "Cash")
      cash_amt += Number(transaction.amount);
    else creditdebit_amt += Number(transaction.amount);
  }
  //   console.log(credit_amt);
  //   console.log(debit_amt);
  //   console.log(upi_amt);
  //   console.log(cash_amt);
  //   console.log(creditdebit_amt);

  const state1 = {
    labels: ["Debit", "Credit"],
    datasets: [
      {
        label: "Transaction Type",
        backgroundColor: ["#lightred", "lightgreen"],
        hoverBackgroundColor: ["red", "green"],
        data: [debit_amt, credit_amt],
      },
    ],
  };

  const state2 = {
    labels: ["UPI", "Cash", "Credit/Debit Card"],
    datasets: [
      {
        label: "Payment Mode",
        backgroundColor: ["lightred", "lightgreen", "lightblue"],
        hoverBackgroundColor: ["red", "green", "blue"],
        data: [upi_amt, cash_amt, creditdebit_amt],
      },
    ],
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Card
          style={{
            margin: "1em",
            backgroundColor: "lightgoldenrodyellow",
            width: "45%",
          }}
        >
          <Doughnut
            data={state1}
            options={{
              title: {
                display: true,
                text: " Overall Cash Flow (in ₹)",
                fontSize: 20,
              },
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  top: 5,
                  left: 15,
                  right: 15,
                  bottom: 15,
                },
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </Card>
        <Card
          style={{
            margin: "1em",
            backgroundColor: "lightgoldenrodyellow",
            width: "45%",
          }}
        >
          <Doughnut
            data={state2}
            options={{
              title: {
                display: true,
                text: "Payment Modes Summary",
                fontSize: 20,
              },
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  top: 5,
                  left: 15,
                  right: 15,
                  bottom: 15,
                },
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </Card>
      </div>
    </>
  );
}

export default Charts;
