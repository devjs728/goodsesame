import { ReactNode } from "react";
import { classNames } from "../../../utils";

const Title1: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <p
      className={classNames(
        "text-3xl text-gray-2 font-bold not-italic",
        className ? className : ""
      )}
    >
      {children}
    </p>
  );
};

export default Title1;
