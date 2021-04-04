import React from "react";
import { Card, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { favourite_vendor } from "../../api/index";
import { favourite_customer } from "../../api/index";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Favourites() {
  const [favouriteVendor, setFavouriteVendor] = useState(null);
  const [favouriteCustomer, setFavouriteCustomer] = useState(null);

  useEffect(() => {
    const token = localStorage.token;
    if (token != null) {
      favourite_vendor().then((data) => {
        const vendor = data.username;
        setFavouriteVendor(vendor);
        console.log(favouriteVendor);
      });
    }
  }, [favouriteVendor]);

  useEffect(() => {
    const token = localStorage.token;
    if (token != null) {
      favourite_customer().then((data) => {
        const customer = data.username;
        setFavouriteCustomer(customer);
        console.log(favouriteCustomer);
      });
    }
  }, [favouriteCustomer]);

  return (
    <>
      <Card
        style={{
          backgroundColor: "grey",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: "1em",
        }}
      >
        <Typography variant="h4" padding="1em">
          {favouriteVendor !== null
            ? `➙ Your Favourite Vendor is ${favouriteVendor} `
            : `➙ You have no Favourite Vendor.`}
        </Typography>
        <Typography variant="h4" padding="1em">
          {favouriteCustomer !== null
            ? `➙ Your Favourite Customer is ${favouriteCustomer} `
            : `➙ You have no Favourite Customer.`}
        </Typography>
      </Card>
    </>
  );
}

export default Favourites;
