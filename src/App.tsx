import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
} from '@heroicons/react/solid';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import Routes from './Routes';
import { ToastInfo, ToastStatus } from './store/main/action';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC<{ toastify: ToastInfo }> = ({ toastify }) => {
  useEffect(() => {
    switch (toastify && toastify.status) {
      case ToastStatus.success:
        toast.success(
          <div className="flex">
            <CheckCircleIcon className="h-6 w-6 text-white mr-3" />
            {toastify.message}
          </div>,
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );
        break;
      case ToastStatus.warning:
        toast.warn(
          <div className="flex">
            <ExclamationIcon className="h-6 w-6 text-white mr-3" />
            {toastify.message}
          </div>,
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );
        break;
      // case ToastStatus.failed:
      //   toast.error(
      //     <div className="flex">
      //       <ExclamationCircleIcon className="h-6 w-6 text-white mr-3" />
      //       {toastify.message}
      //     </div>,
      //     {
      //       position: 'top-right',
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //     },
      //   );
      default:
        break;
    }
  }, [toastify]);

  return (
    <>
      <Routes />
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

const mapStateToPros = (state: any) => {
  return {
    toastify: state.main.toastify,
  };
};

export default connect(mapStateToPros)(App);
