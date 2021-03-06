import { ReactNode } from "react";
import { classNames } from "../../../utils";

const Title2: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <p
      className={classNames(
        "text-2xl text-gray-2 font-bold not-italic",
        className ? className : ""
      )}
    >
      {children}
    </p>
  );
};

export default Title2;
