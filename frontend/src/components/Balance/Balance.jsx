import React from "react";
import { Card, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { get_balance } from "../../api/index";

function Balance() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const id = localStorage.logged_in_id;
    if (id != null) {
      get_balance(id).then((data) => {
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
          height: "10vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
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
