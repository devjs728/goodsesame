import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../../utils";
import navItems from "./navItems";

const NavBar: React.FC<{ firstName: string; lastName: string }> = ({
  firstName,
  lastName,
}) => {
  let location = useLocation();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-end sm:justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden sm:block w-40 w-auto"
                    src="/assets/image/logo.png"
                    alt="GOODSESAME"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navItems.map(({ path, name, navImage: NavImage }) => (
                    <Link
                      key={path}
                      to={path}
                      className={classNames(
                        location?.pathname === path
                          ? "text-pink-1"
                          : "text-gray-1 hover:border-gray-400",
                        "text-normal font-bold transition-color duration-200 flex justify-center items-center border-b border-transparent"
                      )}
                    >
                      <NavImage active={location?.pathname === path} />
                      <span className="hidden lg:block ml-2">{name}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/profile"
                  className="flex justify-end items-center sm:w-40 cursor-pointer text-gray-2  hover:text-gray-1"
                >
                  <img
                    src="/assets/image/default_avatar.png"
                    alt="avatar"
                    className="w-7 h-7"
                  />
                  {
                    <p className="ml-3 text-base font-bold">
                      {`${firstName} ${
                        lastName.length > 0 ? lastName[0] + "." : ""
                      }`}
                    </p>
                  }
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {navItems.map(({ path, name }) => (
                <Link
                  key={path}
                  to={path}
                  className={classNames(
                    location?.pathname === path
                      ? "text-pink-1 bg-pink-50 border-pink-500"
                      : "text-gray-1",
                    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  )}
                >
                  {name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const mapStateToProps = (state: any) => {
  return {
    firstName: state?.user?.firstname ?? "",
    lastName: state?.user?.lastname ?? "",
  };
};

export default connect(mapStateToProps)(NavBar);
