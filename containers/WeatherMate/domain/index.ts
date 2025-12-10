export const formatTypeToKorean = (type: string) => {
  switch (type) {
    case "outer":
      return "아우터";
    case "top":
      return "상의";
    case "bottom":
      return "하의";
    case "shoes":
      return "신발";
    case "accessory":
      return "액세서리";
    default:
      return "기타";
  }
};

export const formatTypeToInitial = (type: string) => {
  return type.toUpperCase().at(0);
};
