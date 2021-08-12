import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../../utils";
import navItems from "./navItems";

const NavBar: React.FC = () => {
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
                    <div
                      key={path}
                      className="flex justify-center items-center"
                    >
                      <NavImage active={location?.pathname === path} />
                      <Link
                        to={path}
                        className={classNames(
                          location?.pathname === path
                            ? "text-pink-1"
                            : "text-gray-1",
                          "ml-2 text-normal font-bold transition-color duration-200"
                        )}
                      >
                        {name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end items-center sm:w-40">
                  <img
                    src="/assets/image/default_avatar.png"
                    alt="avatar"
                    className="w-7 h-7"
                  />
                  <p className="ml-3 text-base text-gray-800 font-bold">
                    Linda C.
                  </p>
                </div>
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

export default NavBar;
