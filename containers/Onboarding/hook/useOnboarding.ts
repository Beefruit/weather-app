"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/store/onboarding.store";

export const useOnboarding = () => {
  const STYLE_OPTIONS = {
    style: ["스포티", "캐주얼", "포멀", "아웃도어", "댄디"],
    favoriteColor: ["베이지", "다크", "화이트", "파스텔", "비비드"],
    tempSensitivity: ["매우 추움", "추움", "보통", "더움", "매우 더움"],
  };

  const router = useRouter();
  const [step, setStep] = useState(1);

  const {
    setStyleOptionsStyle,
    setStyleOptionsFavoriteColor,
    setStyleOptionsTempSensitivity,
  } = useOnboardingStore();

  const onClickOption = (option: string) => {
    if (step === 1) {
      setStyleOptionsStyle(option);
      setStep(2);
    } else if (step === 2) {
      setStyleOptionsFavoriteColor(option);
      setStep(3);
    } else if (step === 3) {
      setStyleOptionsTempSensitivity(option);
      router.push("/");
    }
  };

  return { step, setStep, onClickOption, STYLE_OPTIONS };
};
