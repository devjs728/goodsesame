import React, { ReactNode } from 'react';
import classNames from '../../utils';
import styles from './index.module.scss';

export default function Auth({ children }: { children: ReactNode }) {
  return (
    <div
      className={classNames(
        'block md:flex bg-yellow-1',
        styles['auth-container'],
      )}
    >
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
              className="w-80 mx-auto select-none"
              draggable="false"
            />
            <p className={classNames(styles.copyright)}>
              © Tous droits réservés
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="max-w-26 mx-auto flex-1 mt-10 sm:mt-32 px-3 sm:px-0">
          {children}
        </div>
      </div>
    </div>
  );
}
