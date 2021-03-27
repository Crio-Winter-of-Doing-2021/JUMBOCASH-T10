import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { useSelector } from "react-redux";
import Transaction from "../Transaction/Transaction";
import { get_entityList } from "../../api/index.js";

const filter1_types = [
  {
    value: "Credit",
    label: "Credit",
  },
  { value: "Debit", label: "Debit" },
];

const filter2_types = [
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

const sort_types = [{ value: "amount", label: "Amount" }];

function Transactions({ setCurrentId }) {
  const [entityList, setentityList] = useState([]);

  useEffect(() => {
    const id = localStorage.logged_in_id;
    if (id != null) {
      get_entityList(id).then((items) => {
        setentityList(items);
        console.log(items);
      });
    }
  }, []);

  const transactions = useSelector((state) => state.transactions.transaction);
  const sorted_transactions = [...transactions];
  sorted_transactions.sort(function (a, b) {
    if (Number(a.amount) > Number(b.amount)) return 1;
    else if (Number(a.amount) < Number(b.amount)) return -1;
    else return 0;
  });

  const [show, setShow] = useState(false);
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");
  const [sort, setSort] = useState("");

  const handleClick = () => {
    setShow(true);
    console.log(show);
  };

  const handleFilter1Change = (e) => {
    console.log(e.target.value);
    setFilter1(e.target.value);
  };

  const handleFilter2Change = (e) => {
    console.log(e.target.value);
    setFilter2(e.target.value);
  };

  const handleFilter3Change = (e) => {
    console.log(e.target.value);
    setFilter3(e.target.value);
  };

  const handleUnFilter12 = () => {
    setFilter1("");
    setFilter2("");
  };

  const handleUnFilter3 = () => {
    setFilter3("");
  };

  const handleSortChange = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  const handleUnSort = () => {
    setSort("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="buttons buttons1">
        <button type="button" class="btn btn-primary" onClick={handleClick}>
          Get All Transactions
        </button>
      </div>
      {show ? (
        <>
          <div className="buttons">
            <div className="buttons1">
              <TextField
                style={{
                  width: "10em",
                  backgroundColor: "white",
                  margin: "0px 0.5em",
                  overflowWrap: "break-word",
                }}
                variant="outlined"
                label="Transaction Type"
                select
                value={filter1}
                onChange={handleFilter1Change}
              >
                {filter1_types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{
                  width: "10em",
                  backgroundColor: "white",
                  margin: "0px 0.5em",
                }}
                variant="outlined"
                label="Payment Mode"
                select
                value={filter2}
                onChange={handleFilter2Change}
              >
                {filter2_types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="buttons1">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUnFilter12}
              >
                UnFilter
              </button>
            </div>
          </div>
          <div className="buttons">
            <div className="buttons1">
              <TextField
                style={{ width: "21em", backgroundColor: " white" }}
                label="Show Transactions Of"
                variant="outlined"
                select
                value={filter3}
                onChange={handleFilter3Change}
              >
                {entityList.map((entity) => (
                  <MenuItem key={entity._id} value={entity._id}>
                    {entity.username}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="buttons1">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUnFilter3}
              >
                UnFilter
              </button>
            </div>
          </div>

          <div className="buttons">
            <div className="buttons1">
              <TextField
                style={{ width: "21em", backgroundColor: " white" }}
                label="Sort According to"
                variant="outlined"
                select
                value={sort}
                onChange={handleSortChange}
              >
                {sort_types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="buttons1">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUnSort}
              >
                UnSort
              </button>
            </div>
          </div>
          <div className="buttons2">
            {sort === ""
              ? transactions
                  .filter(function (transaction) {
                    return (
                      transaction.transactionType ===
                        (filter1 === ""
                          ? transaction.transactionType
                          : filter1) &&
                      transaction.paymentMode ===
                        (filter2 === "" ? transaction.paymentMode : filter2) &&
                      (transaction.entity._id == null
                        ? transaction.entity
                        : transaction.entity._id) ===
                        (filter3 === ""
                          ? transaction.entity._id == null
                            ? transaction.entity
                            : transaction.entity._id
                          : filter3)
                    );
                  })
                  .map((transaction) => (
                    <Transaction
                      key={transaction._id}
                      transaction={transaction}
                      entityList={entityList}
                      setCurrentId={setCurrentId}
                    />
                  ))
              : sorted_transactions
                  .filter(function (transaction) {
                    return (
                      transaction.transactionType ===
                        (filter1 === ""
                          ? transaction.transactionType
                          : filter1) &&
                      transaction.paymentMode ===
                        (filter2 === "" ? transaction.paymentMode : filter2) &&
                      (transaction.entity._id == null
                        ? transaction.entity
                        : transaction.entity._id) ===
                        (filter3 === ""
                          ? transaction.entity._id == null
                            ? transaction.entity
                            : transaction.entity._id
                          : filter3)
                    );
                  })
                  .map((transaction) => (
                    <Transaction
                      key={transaction._id}
                      transaction={transaction}
                      entityList={entityList}
                      setCurrentId={setCurrentId}
                    />
                  ))}
          </div>
          <div className="buttons1">
            <button
              type="button"
              className="btn btn-primary"
              onClick={scrollToTop}
            >
              Go To Top
            </button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Transactions;
