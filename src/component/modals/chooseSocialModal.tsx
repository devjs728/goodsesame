import React, { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { connect, useDispatch } from "react-redux";
import { openChooseSocialModal } from "../../store/modal/action";
import Title2 from "../widgets/texts/title2";
import GoogleIcon from "../widgets/icons/googleIcon";
import OpacityWhiteButton from "../widgets/buttons/opacityWhiteButton";
import AppleIcon from "../widgets/icons/appleIcon";
import TwitterIcon from "../widgets/icons/twitterIcon";
import FaceBookIcon from "../widgets/icons/facebookIcon";
import MonoPrixIcon from "../widgets/icons/monoprixIcon";
import { CheckCircleIcon } from "@heroicons/react/solid";

const ChooseSocialModal: React.FC<{ open: boolean }> = ({ open }) => {
  const dispatch = useDispatch();
  const setOpen = (open: boolean) => {
    dispatch(openChooseSocialModal(open));
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        auto-reopen="true"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6 max-w-min">
              <Title2>Choisissez un réseau social</Title2>
              <div className="mt-8">
                <SocialNode
                  icon={<GoogleIcon />}
                  name="Google"
                  background="blue-1"
                >
                  <OpacityWhiteButton>Attacher</OpacityWhiteButton>
                </SocialNode>
                <SocialNode
                  icon={<AppleIcon fillColor="#201E1A" />}
                  name="Apple"
                  background="black-1"
                >
                  <OpacityWhiteButton>Attacher</OpacityWhiteButton>
                </SocialNode>
                <SocialNode
                  icon={<TwitterIcon fillColor="#1DA1F2" />}
                  name="Twitter"
                  background="blue-2"
                >
                  <OpacityWhiteButton>Attacher</OpacityWhiteButton>
                </SocialNode>
              </div>
              <div className="mt-12">
                <SocialNode
                  icon={<FaceBookIcon fillColor="#157DC3" />}
                  name="Facebook"
                  background="blue-3"
                >
                  <CheckCircleIcon className="text-white w-7 h-7 mr-2" />
                </SocialNode>
                <SocialNode
                  icon={<MonoPrixIcon fillColor="#EB5757" />}
                  name="Monoprix"
                  background="pink-4"
                >
                  <CheckCircleIcon className="text-white w-7 h-7 mr-2" />
                </SocialNode>
              </div>
              <p className="text-gray-1 text-base font-medium break-words text-center">
                Après avoir cliqué sur le bouton, vous serez redirigé vers la
                page du réseau social.
              </p>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const SocialNode: React.FC<{
  icon: ReactNode;
  name: string;
  background: string;
  children: ReactNode;
}> = ({ icon, name, background, children }) => {
  return (
    <div
      className={`bg-${background} w-full sm:w-512 p-1.5 my-4 rounded-md flex justify-between items-center`}
    >
      <div className="flex items-center">
        <div className="w-10 h-10 flex justify-center items-center rounded-md bg-white">
          {icon}
        </div>
        <p className="text-white text-base font-medium not-italic ml-4">
          {name}
        </p>
      </div>
      {children}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { open: state.modal.openChooseSocial };
};

export default connect(mapStateToProps)(ChooseSocialModal);
