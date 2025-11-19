export const formatWeatherToKorean = (weather: string) => {
  switch (weather) {
    case "Clear":
      return "맑음";
    case "Clouds":
      return "흐림";
    case "Rain":
      return "비";
    case "Snow":
      return "눈";
    case "Drizzle":
      return "이슬비";
    case "Thunderstorm":
      return "뇌우";
    default:
      return weather;
  }
};
