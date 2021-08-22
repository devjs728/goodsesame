import React, { ReactNode } from 'react';
import classNames from '../../../utils';

const Text1: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <p
      className={classNames(
        'text-sm text-gray-1 font-medium not-italic',
        className ?? '',
      )}
    >
      {children}
    </p>
  );
};

export default Text1;
