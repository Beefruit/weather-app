import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./page.module.css";
import OnboardingContainer from "@/containers/Onboarding/Onboarding.container";

const cx = classNames.bind(styles);

const OnBoardingPage: FC = () => {
  return (
    <div className={cx("main", "onboarding")}>
      <OnboardingContainer />
    </div>
  );
};

export default OnBoardingPage;
