"use client";

import { type FC } from "react";
import Step1Presenter from "./presenter/Step1.presenter";
import Step2Presenter from "./presenter/Step2.presenter";
import Step3Presenter from "./presenter/Step3.presenter";
import Step4Presenter from "./presenter/Step4.presenter";
import ProgressbarPresenter from "./presenter/ProgressBar.presenter";

import { useOnboarding } from "./hook/useOnboarding";

const OnboardingContainer: FC = () => {
  const { step, onClickOption, STYLE_OPTIONS, styleOptions } = useOnboarding();

  return (
    <>
      <ProgressbarPresenter step={step} />
      {step === 1 && (
        <Step1Presenter
          options={STYLE_OPTIONS.gender}
          onClickOption={onClickOption}
        />
      )}
      {step === 2 && (
        <Step2Presenter
          options={
            STYLE_OPTIONS.style[
              styleOptions.gender === "남성" ? "man" : "woman"
            ]
          }
          onClickOption={onClickOption}
        />
      )}
      {step === 3 && (
        <Step3Presenter
          options={STYLE_OPTIONS.favoriteColor}
          onClickOption={onClickOption}
        />
      )}
      {step === 4 && (
        <Step4Presenter
          options={STYLE_OPTIONS.tempSensitivity}
          onClickOption={onClickOption}
        />
      )}
    </>
  );
};

export default OnboardingContainer;
