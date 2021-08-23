import { classNames } from "../../../utils";
import styles from "./index.module.scss";

const ToggleSwitch: React.FC<{
  id: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}> = ({ id, checked, onChange }) => {
  return (
    <div className={classNames(styles["toggle-switch-container"])}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => {
          if (onChange) onChange(e.target.checked);
        }}
      />
      <label htmlFor={id}>Toggle</label>
    </div>
  );
};

export default ToggleSwitch;
