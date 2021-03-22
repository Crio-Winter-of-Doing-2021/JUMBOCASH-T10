import NavBar from "./components/NavBar/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import DashboardTransaction from "./components/Dashboard/DashboardTransaction/DashboardTransaction";
import DashboardHome from "./components/Dashboard/DashboardHome/DashboardHome";
import DashboardReport from "./components/Dashboard/DashboardReport/DashboardReport";
import DashboardEntity from "./components/Dashboard/DashboardEntity/DashboardEntity";
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
        <Route path="/dashboard/transaction">
          {isLoggedIn ? <DashboardTransaction /> : <Redirect to="/" />}
        </Route>
        <Route path="/dashboard/entity">
          {isLoggedIn ? <DashboardEntity /> : <Redirect to="/" />}
        </Route>
        <Route path="/dashboard/report">
          {isLoggedIn ? <DashboardReport /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/dashboard">
          {isLoggedIn ? <DashboardHome /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/logout">
          {isLoggedIn ? <Logout /> : <Redirect to="/sign-in" />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
