import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./Entities.css";
import Entity from "../Entity/Entity";
import { useSelector } from "react-redux";

function Entities({ setCurrentId }) {
  const entities = useSelector((state) => state.entity.entity);
  console.log(entities);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    console.log(show);
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
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Get All Entities
        </button>
      </div>
      {show ? (
        <>
          <div className="buttons">
            <div className="buttons1">
              <button type="button" className="btn btn-primary">
                Filter
              </button>
              <button type="button" className="btn btn-primary">
                Filter
              </button>
            </div>
            <div className="buttons1">
              <button type="button" className="btn btn-primary">
                Filter
              </button>
            </div>
          </div>
          <div className="buttons">
            <div className="buttons1">
              <button type="button" className="btn btn-primary">
                Sort
              </button>
              <button type="button" class="btn btn-primary">
                Sort
              </button>
            </div>
            <div className="buttons1">
              <button type="button" className="btn btn-primary">
                Sort
              </button>
            </div>
          </div>
          <div className="buttons2">
            {entities.map((entity) => (
              <Entity
                key={entity._id}
                entity={entity}
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

export default Entities;
