import Auth from "../../component/auth";
import GrayButton from "../../component/widgets/buttons.tsx/grayButton";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import {
  Link,
  Redirect,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Welcome from "./welcome";
import Progress from "../../component/setupProfile/progress";
import Allergies from "./allerge";
import Preferences from "./preferences";
import KitchenMe from "./kitchenMe";
import YourGoals from "./yourGoals";

export default function SetupProfile() {
  let { path, url } = useRouteMatch();
  let history = useHistory();
  let { step } = useParams<{ step: string }>();
  const parentPath = path.replace("/:step", "");

  return (
    <Auth>
      <GrayButton>
        <ChevronLeftIcon className="w-6 h-6 mr-1" />
        En arrière
      </GrayButton>
      <div className="mt-8">
        <Progress step={step} countOfStep={5} />
      </div>
      <div className="mt-6">
        <Switch>
          <Route exact path={`${parentPath}/0`} component={Welcome} />
          <Route exact path={`${parentPath}/1`} component={Allergies} />
          <Route exact path={`${parentPath}/2`} component={Preferences} />
          <Route exact path={`${parentPath}/3`} component={KitchenMe} />
          <Route exact path={`${parentPath}/4`} component={YourGoals} />
          <Redirect to={`${parentPath}/0`} />
        </Switch>
      </div>
    </Auth>
  );
}
