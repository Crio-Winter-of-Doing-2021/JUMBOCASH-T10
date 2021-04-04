import React from "react";
import "./Home.css";

const Home = () => {
  const token = localStorage.token;
  return (
    <>
      {token == null ? (
        <div className="home-container">
          <div className="home-template">
            <h3>Cashflow Management System</h3>
            <h5>An all in one application to track and manage your expenses</h5>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            margin: "2rem",
            height: "100%",
          }}
        >
          <div
            className="spinner-border text-primary"
            style={{
              width: "20rem",
              height: "20rem",
              margin: "1rem",
            }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <div>
            <h3>Logging In...</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
