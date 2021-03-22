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

const entity_types = [
  {
    value: "Customer",
    label: "Customer",
  },
  { value: "Vendor", label: "Vendor" },
];

function EntityForm() {
  const classes = useStyles();

  let entity = {
    entity_name: "",
    phone_no: "",
    entity_type: "",
    adress: "",
  };
  const [entityObj, setEntityObj] = useState(entity);

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setEntityObj({
      ...entityObj,
      [name]: value,
    });
  };

  const handleClear = () => {
    setEntityObj(entity);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone = entityObj.phone_no;
    let err = false;

    if (phone.length !== 10) err = true;

    for (let ch in phone) {
      if (!(ch >= "0" && ch <= "9")) err = true;
    }

    if (phone[0] === "0") err = true;

    if (err === true) {
      toast.error("Phone Number is Incorrect", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    console.log("submmitting form");
    console.log(entityObj);
    handleClear();
    toast.success("Entity Created Successfully", {
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
      <div className="entity-form-container">
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography variant="h6">Create Entity</Typography>
            <TextField
              name="entity_name"
              variant="outlined"
              label="Entity Name"
              fullWidth
              required
              value={entityObj.entity_name}
              onChange={handleChange}
            />
            <TextField
              name="phone_no"
              variant="outlined"
              label="Phone Number"
              fullWidth
              required
              type="text"
              value={entityObj.phone_no}
              onChange={handleChange}
            />

            <TextField
              name="entity_type"
              variant="outlined"
              label="Entity type"
              fullWidth
              required
              select
              value={entityObj.entity_type}
              onChange={handleChange}
            >
              {entity_types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="adress"
              variant="outlined"
              label="Enter the adress of the Entity"
              fullWidth
              multiline
              rows={4}
              value={entityObj.adress}
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

export default EntityForm;
