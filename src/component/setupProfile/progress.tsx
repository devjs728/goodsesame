import React from 'react';
import classNames from '../../utils';

const Step: React.FC<{
  index: number;
  step: number;
  totalSteps: number;
}> = ({ index, step, totalSteps }) => {
  let cName = '';
  if (index < totalSteps - 1) {
    if (step + 1 === totalSteps) {
      cName = 'w-3/4';
    } else if (index === step) {
      cName = 'w-3/6';
    } else {
      cName = 'w-1/6';
    }
  } else {
    cName = 'w-auto';
  }

  return (
    <div
      className={classNames(
        cName,
        'flex flex-nowrap items-center justify-left transition-all duration-500',
      )}
    >
      <svg
        height="16"
        width="16"
        className={classNames(index > step ? 'text-gray-350' : 'text-pink-1')}
      >
        <circle cx="8" cy="8" r="8" fill="currentColor" />
      </svg>
      {index < totalSteps - 1 && (
        <div
          className={classNames(
            index > step ? 'bg-gray-350' : 'bg-pink-1 opacity-50',
            'flex-1 h-0.5 rounded-sm mx-1',
          )}
        />
      )}
    </div>
  );
};

const Progress: React.FC<{ step: number; countOfStep: number }> = ({
  step,
  countOfStep,
}) => {
  return (
    <div className="flex flex-nowrap items-center justify-left w-full">
      {Array.from(Array(countOfStep), (e, index) => {
        return (
          <Step
            key={index}
            index={index}
            step={step}
            totalSteps={countOfStep}
          />
        );
      })}
    </div>
  );
};

export default Progress;
