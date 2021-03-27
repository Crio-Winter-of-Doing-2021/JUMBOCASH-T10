import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
