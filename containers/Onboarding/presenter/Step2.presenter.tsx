import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./Step.module.css";
import { ArrowRight } from "lucide-react";

const cx = classNames.bind(styles);

interface IStep1PresenterProps {
  options: string[];
  onClickOption: (value: string) => void;
}

const Step1Presenter: FC<IStep1PresenterProps> = ({
  onClickOption,
  options,
}) => {
  return (
    <div className={cx("step-container")}>
      <h2 className={cx("step-title")}>당신의 스타일은?</h2>
      <ul className={cx("style-list", "style-list--mini")}>
        {options.map((option) => (
          <li
            key={option}
            className={cx("style-item")}
            onClick={() => onClickOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Step1Presenter;
