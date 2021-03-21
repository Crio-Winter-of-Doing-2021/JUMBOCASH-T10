import React from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const transaction_types = [
  {
    value: "Credit",
    label: "Credit",
  },
  { value: "Debit", label: "Debit" },
];

const transaction_modes = [
  {
    value: "Cash",
    label: "Cash",
  },
  {
    value: "UPI",
    label: "UPI",
  },
  {
    value: "Credit/Debit Card",
    label: "Credit/Debit Card",
  },
];

function TransactionForm() {
  const classes = useStyles();

  let transaction = {
    entity: "",
    amount: 0,
    transaction_type: "Credit",
    transaction_mode: "Cash",
    transaction_remark: "",
  };
  const [transactionObj, setTransactionObj] = useState(transaction);

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "amount" && value < 0) value = 0;
    setTransactionObj({
      ...transactionObj,
      [name]: value,
    });
  };

  const handleClear = () => {
    setTransactionObj(transaction);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submmitting form");
    console.log(transactionObj);
    handleClear();
    toast.success("Transaction Submiited Successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="transaction-form-container">
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography variant="h6">Create Transaction</Typography>
            <TextField
              name="entity"
              variant="outlined"
              label="Entity Name"
              fullWidth
              required
              value={transactionObj.entity}
              onChange={handleChange}
            />
            <TextField
              name="amount"
              variant="outlined"
              label="Amount"
              fullWidth
              required
              type="number"
              value={transactionObj.amount}
              onChange={handleChange}
            />
            <TextField
              name="date"
              variant="outlined"
              fullWidth
              required
              type="date"
            />
            <TextField
              name="transaction_mode"
              variant="outlined"
              label="mode of payment"
              fullWidth
              required
              select
              value={transactionObj.transaction_mode}
              onChange={handleChange}
            >
              {transaction_modes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="transaction_type"
              variant="outlined"
              label="transaction type"
              fullWidth
              required
              select
              value={transactionObj.transaction_type}
              onChange={handleChange}
            >
              {transaction_types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="transaction_remark"
              variant="outlined"
              label="What's this Transaction is for.."
              fullWidth
              multiline
              rows={4}
              value={transactionObj.transaction_remark}
              onChange={handleChange}
              required
            />
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              fullWidth
              onClick={handleClear}
            >
              Clear
            </Button>
          </form>
        </Paper>
      </div>
      <ToastContainer />
    </>
  );
}

export default TransactionForm;
