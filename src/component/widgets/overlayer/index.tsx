import React from 'react';
import classNames from '../../../utils';
import styles from './index.module.scss';

const Overlayer: React.FC = () => {
  return (
    <div className={classNames(styles['overlayer-container'])}>
      <svg>
        <g>
          <path d="M 50,100 A 1,1 0 0 1 50,0" />
        </g>
        <g>
          <path d="M 50,75 A 1,1 0 0 0 50,-25" />
        </g>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: '#FFC43D', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#FFC48D', stopOpacity: 3 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Overlayer;
