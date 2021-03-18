import NavBar from "./components/NavBar/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Logout from "./components/Logout/Logout";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  // const auth = useSelector((state) => state.auth);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Home />}
        </Route>
        <Route exact path="/sign-in">
          {isLoggedIn ? <Redirect to="/logout" /> : <Login />}
        </Route>
        <Route exact path="/dashboard">
          {!isLoggedIn ? <Redirect to="/" /> : <Dashboard />}
        </Route>
        <Route exact path="/logout">
          {!isLoggedIn ? <Redirect to="/sign-in" /> : <Logout />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
