import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "../../component/main/navBar";
import navItems from "../../component/main/navBar/navItems";
import Overlayer from "../../component/widgets/overlayer";
import { getUserProfile } from "../../store/user/action";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function init() {
      await dispatch(getUserProfile());
      setLoading(false);
    }

    init();
  }, [dispatch]);

  if (isLoading) {
    return <Overlayer />;
  }

  return (
    <div>
      <NavBar />
      <Switch>
        {navItems.map(({ path, component }) => (
          <Route key={path} exact path={path} component={component} />
        ))}
        <Redirect from="/" to="/mes-menus" />
      </Switch>
    </div>
  );
};

export default Main;
