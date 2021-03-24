import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./Entities.css";
import Entity from "../Entity/Entity";
import { useSelector } from "react-redux";
import { TextField, MenuItem } from "@material-ui/core";

const entity_types = [
  {
    value: "Customer",
    label: "Customer",
  },
  { value: "Vendor", label: "Vendor" },
];

const sort_type = [{ value: "name", label: "Entity Name" }];

function Entities({ setCurrentId }) {
  const entities = useSelector((state) => state.entity.entity);

  const filtered_entities_Customer = entities.filter(function (entity) {
    return entity.userType === "Customer";
  });
  const filtered_entities_Vendor = entities.filter(function (entity) {
    return entity.userType === "Vendor";
  });

  const sorted_entities = [...entities];
  const filtered_sorted_entities_Customer = [...filtered_entities_Customer];
  const filtered_sorted_entities_Vendor = [...filtered_entities_Vendor];

  sorted_entities.sort(function (a, b) {
    if (a.username.toUpperCase() > b.username.toUpperCase()) return 1;
    else if (a.username.toUpperCase() < b.username.toUpperCase()) return -1;
    else return 0;
  });

  filtered_sorted_entities_Customer.sort(function (a, b) {
    if (a.username.toUpperCase() > b.username.toUpperCase()) return 1;
    else if (a.username.toUpperCase() < b.username.toUpperCase()) return -1;
    else return 0;
  });

  filtered_sorted_entities_Vendor.sort(function (a, b) {
    if (a.username.toUpperCase() > b.username.toUpperCase()) return 1;
    else if (a.username.toUpperCase() < b.username.toUpperCase()) return -1;
    else return 0;
  });

  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const handleClick = () => {
    setShow(true);
    console.log(show);
  };

  const handleFilterChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  const handleUnFilter = () => {
    setFilter("");
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
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Get All Entities
        </button>
      </div>
      {show ? (
        <>
          <div className="buttons">
            <div className="buttons1">
              <TextField
                style={{ width: "15em", backgroundColor: "white" }}
                variant="outlined"
                label="Entity Type"
                select
                value={filter}
                onChange={handleFilterChange}
              >
                {entity_types.map((option) => (
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
                onClick={handleUnFilter}
              >
                UnFilter
              </button>
            </div>
          </div>
          <div className="buttons">
            <div className="buttons1">
              <TextField
                style={{ width: "15em", backgroundColor: " white" }}
                label="Sort According to"
                variant="outlined"
                select
                value={sort}
                onChange={handleSortChange}
              >
                {sort_type.map((option) => (
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
            {sort === "" && filter === ""
              ? entities.map((entity) => (
                  <Entity
                    key={entity._id}
                    entity={entity}
                    setCurrentId={setCurrentId}
                  />
                ))
              : null}

            {sort !== "" && filter === ""
              ? sorted_entities.map((entity) => (
                  <Entity
                    key={entity._id}
                    entity={entity}
                    setCurrentId={setCurrentId}
                  />
                ))
              : null}

            {sort === "" && filter === "Customer"
              ? filtered_entities_Customer.map((entity) => (
                  <Entity
                    key={entity._id}
                    entity={entity}
                    setCurrentId={setCurrentId}
                  />
                ))
              : null}

            {sort !== "" && filter === "Customer"
              ? filtered_sorted_entities_Customer.map((entity) => (
                  <Entity
                    key={entity._id}
                    entity={entity}
                    setCurrentId={setCurrentId}
                  />
                ))
              : null}

            {sort === "" && filter === "Vendor"
              ? filtered_entities_Vendor.map((entity) => (
                  <Entity
                    key={entity._id}
                    entity={entity}
                    setCurrentId={setCurrentId}
                  />
                ))
              : null}

            {sort !== "" && filter === "Vendor"
              ? filtered_sorted_entities_Vendor.map((entity) => (
                  <Entity
                    key={entity._id}
                    entity={entity}
                    setCurrentId={setCurrentId}
                  />
                ))
              : null}
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
