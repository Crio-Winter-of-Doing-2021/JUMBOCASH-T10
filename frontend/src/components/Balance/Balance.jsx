import React from "react";
import { Card, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { get_balance } from "../../api/index";

function Balance() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const token = localStorage.token;
    if (token != null) {
      get_balance().then((data) => {
        const balance = data.balance;
        setBalance(balance);
        console.log(balance);
      });
    }
  }, []);

  return (
    <>
      <Card
        style={{
          backgroundColor: "grey",
          color: "white",
          padding: "1em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="h4">
          {balance !== null
            ? balance >= 0
              ? ` 😃 You have a Profit of ₹ ${balance}`
              : ` ☹️ You currently owe ₹ ${-balance}`
            : null}
        </Typography>
      </Card>
    </>
  );
}

export default Balance;
