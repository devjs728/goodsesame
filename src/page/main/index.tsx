import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "../../component/main/navBar";
import navItems from "../../component/main/navBar/navItems";

const Main: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        {navItems.map(({ path, component }) => (
          <Route exact path={path} component={component} />
        ))}
        <Redirect from="/" to="/mes-menus" />
      </Switch>
    </div>
  );
};

export default Main;
