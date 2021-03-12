import NavBar from "./components/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  console.log("hello");
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
