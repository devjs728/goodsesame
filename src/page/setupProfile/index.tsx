import GrayButton from "../../component/widgets/buttons.tsx/grayButton";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import {
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
  let { path } = useRouteMatch();
  let { step } = useParams<{ step: string }>();
  let history = useHistory();
  const parentPath = path.replace("/:step", "");

  const handleBack = () => {
    const numStep = parseInt(step);
    if (numStep > 0) {
      history.push(`${parentPath}/${numStep - 1}`);
    }
  };

  return (
    <div className="block md:flex bg-yellow-1">
      <div className="hidden md:flex flex-col w-96 lg:w-104 h-screen px-16 pt-16 pb-8">
        <div>
          <img
            src="/assets/image/logo.png"
            alt="logo"
            className="w-28 select-none"
            draggable="false"
          />
          <p className="text-4xl font-bold mt-12">
            Planifier les meilleurs repas, pour ta santé et notre planète.
          </p>
        </div>
        <div className="flex-1 flex items-end">
          <div>
            <img
              src="/assets/image/mascotte.png"
              alt="mascotte"
              className="w-80 mx-auto mb-20 select-none"
              draggable="false"
            />
            <p>© Tous droits réservés</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="max-w-26 mx-auto flex-1 mt-10 sm:mt-32 px-3 sm:px-0">
          <GrayButton onClick={handleBack}>
            <ChevronLeftIcon className="w-6 h-6 mr-1" />
            En arrière
          </GrayButton>
          <div className="mt-8">
            <Progress step={step} countOfStep={5} />
          </div>
          <div className="my-6">
            <Switch>
              <Route exact path={`${parentPath}/0`} component={Welcome} />
              <Route exact path={`${parentPath}/1`} component={Allergies} />
              <Route exact path={`${parentPath}/2`} component={Preferences} />
              <Route exact path={`${parentPath}/3`} component={KitchenMe} />
              <Route exact path={`${parentPath}/4`} component={YourGoals} />
              <Redirect to={`${parentPath}/0`} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
