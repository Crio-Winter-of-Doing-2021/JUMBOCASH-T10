import React from "react";
import {
  Avatar,
  Card,
  CardHeader,
  Typography,
  CardContent,
  CardActions,
  Collapse,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";
import moment from "moment";
import clsx from "clsx";
import { useState } from "react";

function Transaction({ transaction, entityList, setCurrentId }) {
  const classes = useStyles();
  const entityId =
    transaction.entity._id == null
      ? transaction.entity
      : transaction.entity._id;

  const date = moment(transaction.transactionTime).format("DD-MM-YYYY");

  const scrollToTop = () => {
    setCurrentId(transaction._id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card
        className={classes.root}
        style={{
          width: "100%",
          padding: "1em",
          margin: "1em",
          backgroundColor: "lightgoldenrodyellow",
        }}
      >
        <CardHeader
          style={{ backgroundColor: "lightgreen" }}
          avatar={
            <Avatar aria-label="transaction" className={classes.avatar}>
              T
            </Avatar>
          }
          action={
            <IconButton aria-label="edit" onClick={scrollToTop}>
              <MoreVertIcon />
            </IconButton>
          }
          title={entityList.map((entity) =>
            entity._id === entityId ? entity.username : null
          )}
          subheader={date}
        />
        <CardContent>
          <Typography
            variant="h6"
            display="inline"
          >{`Amount Transacted : `}</Typography>
          <Typography
            paragraph
            color="textSecondary"
            component="p"
            display="inline"
          >
            {`₹ ${transaction.amount}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography variant="h6">
            Show {expanded ? "Less" : "More"}
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div>
              <Typography
                variant="h6"
                display="inline"
              >{`Payment Mode :`}</Typography>
              <Typography paragraph component="p" display="inline">
                {` ${transaction.paymentMode}`}
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                display="inline"
              >{`Transaction Type : `}</Typography>
              <Typography paragraph component="p" display="inline">
                {transaction.transactionType}
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                display="inline"
              >{`Transaction Remarks : `}</Typography>
              <Typography paragraph component="p" display="inline">
                {transaction.remarks}
              </Typography>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default Transaction;
