import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../../../utils";
import Title3 from "../../../widgets/texts/title3";
import navItems from "./navItems";

const NavBar: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col flex-grow pb-4 overflow-y-auto px-4">
      <div className="flex items-center flex-shrink-0">
        <Title3>Modifier le profil</Title3>
      </div>
      <div className="mt-2 block ">
        {navItems.map(({ path, name }) => (
          <div key={path} className="py-1.5">
            <Link
              to={path}
              className={classNames(
                location.pathname === path
                  ? "text-pink-1"
                  : "text-gray-1 hover:text-gray-2",
                "text-sm font-medium not-italic transition-color delay-75"
              )}
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
