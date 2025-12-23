"use client";

import { useWeatherMateModalStore } from "@/store/weatherMateModal.store";

export const useWeatherMateBtn = () => {
  const TODAY_SCEDULES = [
    {
      name: "출퇴근",
      type: "work",
    },
    { name: "운동", type: "exercise" },
    { name: "데이트", type: "date" },
    { name: "야외활동", type: "outdoor" },
    { name: "격식", type: "formal" },
  ];
  const { setIsOpen, setScheduleType } = useWeatherMateModalStore();

  const onClickBtn = (scheduleType: string) => {
    setIsOpen(true);
    setScheduleType(scheduleType);
  };

  return { onClickBtn, TODAY_SCEDULES };
};
