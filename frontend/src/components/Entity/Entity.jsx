import React from "react";
import {
  Avatar,
  Card,
  CardHeader,
  Typography,
  CardContent,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./styles";

function Entity(props) {
  const classes = useStyles();
  const { key, entity } = props;

  const scrollToTop = () => {
    console.log("hello");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Card
        className={classes.root}
        style={{ width: "100%", padding: "1em", margin: "1em" }}
      >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              E
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={scrollToTop}>
              <MoreVertIcon />
            </IconButton>
          }
          title={entity.username}
          subheader={entity.userType}
        />
        <CardContent>
          <Typography variant="h6">{`Phone Number :`}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {entity.mobile}
          </Typography>
          <Typography variant="h6">{`Address :`}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {entity.address}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Entity;
