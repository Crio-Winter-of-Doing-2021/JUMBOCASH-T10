import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Transactions() {
  const [filter, setFilter] = useState(false);
  const handleClick = () => {
    setFilter(true);
    console.log(filter);
  };

  return (
    <>
      <div className="buttons buttons1">
        <button type="button" class="btn btn-primary" onClick={handleClick}>
          Get All Transactions
        </button>
      </div>
      {filter ? (
        <>
          <div className="buttons">
            <div className="buttons1">
              <button type="button" class="btn btn-primary">
                Filter
              </button>
              <button type="button" class="btn btn-primary">
                Filter
              </button>
            </div>
            <div className="buttons1">
              <button type="button" class="btn btn-primary">
                Filter
              </button>
            </div>
          </div>
          <div className="buttons">
            <div className="buttons1">
              <button type="button" class="btn btn-primary">
                Sort
              </button>
            </div>
            <div className="buttons1">
              <button type="button" class="btn btn-primary">
                Sort
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Transactions;
