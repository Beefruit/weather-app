"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/store/onboarding.store";

export const useOnboarding = () => {
  const STYLE_OPTIONS = {
    gender: ["여성", "남성"],
    style: {
      man: [
        // 기본
        "캐주얼",
        "미니멀",
        "댄디",
        "포멀",
        "비즈니스 캐주얼",
        // 트렌디
        "스트릿",
        "시티보이",
        "테크웨어",
        "Y2K",
        // 활동적
        "스포티",
        "애슬레저",
        "아웃도어",
        "골프웨어",
        // 개성
        "빈티지",
        "워크웨어",
        "레트로",
        "밀리터리",
      ],
      woman: [
        // 기본
        "캐주얼",
        "미니멀",
        "오피스",
        "포멀",
        "데일리룩",

        // 페미닌
        "페미닌",
        "로맨틱",
        "러블리",
        "청순",

        // 트렌디
        "스트릿",
        "시크",
        "Y2K",
        "하이틴",

        // 활동적
        "스포티",
        "애슬레저",
        "아웃도어",
        "골프웨어",

        // 개성
        "빈티지",
        "레트로",
        "모던",
        "프렌치 시크",
      ],
    },
    favoriteColor: ["코지", "다크", "라이트", "파스텔", "비비드"],
    tempSensitivity: ["매우 추움", "추움", "보통", "더움", "매우 더움"],
  };

  const router = useRouter();
  const [step, setStep] = useState(1);

  const {
    styleOptions,
    setStyleOptionsGender,
    setStyleOptionsStyle,
    setStyleOptionsFavoriteColor,
    setStyleOptionsTempSensitivity,
  } = useOnboardingStore();

  const onClickOption = (option: string) => {
    if (step === 1) {
      setStyleOptionsGender(option);
      setStep(2);
    } else if (step === 2) {
      setStyleOptionsStyle(option);
      setStep(3);
    } else if (step === 3) {
      setStyleOptionsFavoriteColor(option);
      setStep(4);
    } else if (step === 4) {
      setStyleOptionsTempSensitivity(option);
      router.push("/");
    }
  };

  return { step, setStep, styleOptions, onClickOption, STYLE_OPTIONS };
};
