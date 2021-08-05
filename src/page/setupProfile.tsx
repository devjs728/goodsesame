import Auth from "../component/auth";
import AuthTitle from "../component/auth/authTitle";
import AuthDescription from "../component/auth/authDescription";
import NormalInput from "../component/inputs/normalInput";
import PinkButton from "../component/buttons.tsx/pinkButton";
import GrayButton from "../component/buttons.tsx/grayButton";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AAA from "./aaa";

export default function SetupProfile() {
  let { path, url } = useRouteMatch();

  return (
    <Auth>
      <GrayButton>
        <ChevronLeftIcon className="w-6 h-6 mr-1" />
        En arrière
      </GrayButton>
      <div>progress</div>
      <Link to={`${url}/rendering`}>Rendering with React</Link>
      <Switch>
        <Route exact path={`${path}/:topicId`} component={AAA} />
      </Switch>
    </Auth>
  );
}
