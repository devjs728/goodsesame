import { ReactNode } from "react";
import { classNames } from "../../../utils";

const Text1: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <p
      className={classNames(
        "text-xs text-gray-1 font-medium not-italic",
        className ? className : ""
      )}
    >
      {children}
    </p>
  );
};

export default Text1;
