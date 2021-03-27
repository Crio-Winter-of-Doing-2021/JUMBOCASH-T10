import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

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
    backgroundColor: blue[500],
  },
}));
