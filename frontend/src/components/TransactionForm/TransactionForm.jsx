import React from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@material-ui/core";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import useStyles from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post_transaction, update_transaction } from "../../actions/index.js";
import { useDispatch, useSelector } from "react-redux";

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

function TransactionForm({ entityList, currentId, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const currentTransaction = useSelector((state) =>
    currentId
      ? state.transactions.transaction.find((t) => t._id === currentId)
      : null
  );

  let transaction = {
    entity_id: "",
    amount: 0,
    transaction_type: "",
    transaction_mode: "",
    transaction_remark: "",
  };
  const [transactionObj, setTransactionObj] = useState(transaction);

  useEffect(() => {
    if (currentTransaction) {
      setShow(true);
      setTransactionObj({
        entity_id:
          currentTransaction.entity._id == null
            ? currentTransaction.entity
            : currentTransaction.entity._id,
        transaction_type: currentTransaction.transactionType,
        amount: currentTransaction.amount,
        transaction_mode: currentTransaction.paymentMode,
        transaction_remark: currentTransaction.remarks,
      });
    }
  }, [currentTransaction]);

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
    setCurrentId(null);
    setTransactionObj(transaction);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      try {
        console.log("updating form");
        console.log(transactionObj);
        dispatch(update_transaction(currentId, transactionObj));
        handleClear();

        toast.success("Transaction Updated Successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.log(error);
      }
      return;
    }

    try {
      console.log("submmitting form");
      console.log(transactionObj);
      dispatch(post_transaction(transactionObj));
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
    } catch (error) {
      console.log(error);
    }
  };

  const handleShow = () => {
    handleClear();
    show ? setShow(false) : setShow(true);
  };

  return (
    <>
      <div className="buttons buttons1">
        <button
          type="button"
          className={show ? "btn btn-danger" : "btn btn-primary"}
          style={{
            marginBottom: "1em",
            height: "fit-content",
            whiteSpace: "normal",
            wordWrap: "break-word",
            textAlign: "center",
          }}
          onClick={handleShow}
        >
          {show ? "Close" : "Create Transaction"}
        </button>
      </div>
      {show ? (
        <>
          <div className="transaction-form-container">
            <Paper className={classes.paper}>
              <form
                autoComplete="off"
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
              >
                <Typography variant="h6">
                  {currentId ? `Edit` : `Create`} Transaction
                </Typography>
                {currentId ? null : (
                  <TextField
                    name="entity_id"
                    variant="outlined"
                    label="Entity Name"
                    fullWidth
                    required
                    select
                    value={transactionObj.entity_id}
                    onChange={handleChange}
                  >
                    {entityList.map((entity) => (
                      <MenuItem key={entity._id} value={entity._id}>
                        {entity.username}
                      </MenuItem>
                    ))}
                  </TextField>
                )}

                <TextField
                  name="amount"
                  variant="outlined"
                  label="Amount(in Rs.)"
                  fullWidth
                  required
                  type="number"
                  value={transactionObj.amount}
                  onChange={handleChange}
                />
                <TextField
                  name="transaction_mode"
                  variant="outlined"
                  label="Mode Of Payment"
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
                  label="Transaction Type"
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
      ) : null}
    </>
  );
}

export default TransactionForm;
