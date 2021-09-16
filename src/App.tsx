import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import { CreateHouse } from "./Components/CreateHouse";
import { HouseDetails } from "./Components/HouseDetails";
import { Houses } from "./Components/Houses";
import { Main } from "./Components/Main";
import { Nav, NavItem } from "./styles";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <Main />
        </Route>
        <Route exact path="/houses">
          <>
            <NavBar />
            <Houses />
          </>
        </Route>
        <Route path="/houses/:houseId">
          <>
            <NavBar />
            <HouseDetails />
          </>
        </Route>
        <Route path="/create">
          <>
            <NavBar />
            <CreateHouse />
          </>
        </Route>
      </Switch>
    </div>
  );
}

function NavBar() {
  return (
    <Nav>
      <NavItem as={Link} to="/">
        Home
      </NavItem>
      <NavItem as={Link} to="/houses">
        Houses
      </NavItem>
      <NavItem as={Link} to="/create">
        Create
      </NavItem>
    </Nav>
  );
}

export default App;
