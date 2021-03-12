import NavBar from "./components/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-in" component={Form} />
      </Switch>
    </>
  );
}

export default App;
