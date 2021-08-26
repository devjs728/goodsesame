import { ReactNode } from "react";
import { classNames } from "../../../utils";

const Text1: React.FC<{
  children?: ReactNode;
  className?: string;
  dangerouslySetInnerHTML?:
    | {
        __html: string;
      }
    | undefined;
}> = ({ children, className, dangerouslySetInnerHTML }) => {
  return (
    <p
      className={classNames(
        "text-xs text-gray-1 font-medium not-italic",
        className ? className : ""
      )}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </p>
  );
};

export default Text1;
