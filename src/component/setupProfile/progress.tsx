import React from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Step: React.FC<{
  active?: boolean;
  hasLine?: boolean;
  isLastStep?: boolean;
}> = ({ active, hasLine, isLastStep }) => {
  return (
    <div
      className={classNames(
        hasLine
          ? isLastStep
            ? "w-3/4"
            : active
            ? "w-3/6"
            : "w-1/6"
          : "w-auto",
        "flex flex-nowrap items-center justify-left transition-all duration-500"
      )}
    >
      <svg height="16" width="16" className="text-pink-1">
        <circle cx="8" cy="8" r="8" fill="currentColor" />
      </svg>
      {hasLine && (
        <div className="flex-1 h-0.5 rounded-sm bg-pink-1 mx-1 opacity-50" />
      )}
    </div>
  );
};

const Progress: React.FC<{ step: string; countOfStep: number }> = ({
  step,
  countOfStep,
}) => {
  console.log(step);

  return (
    <div className="flex flex-nowrap items-center justify-left w-full">
      {Array.from(Array(countOfStep), (e, index) => {
        return (
          <Step
            key={index}
            active={step === index.toString()}
            isLastStep={step === (countOfStep - 1).toString()}
            hasLine={index < countOfStep - 1}
          />
        );
      })}
    </div>
  );
};

export default Progress;
