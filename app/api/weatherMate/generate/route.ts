import { Completion } from "./../../../../node_modules/openai/resources/completions.d";
import { OpenAI } from "openai/client.js";
import { NextResponse, NextRequest } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
});

export async function POST(request: NextRequest) {
  const { style, favoriteColor, tempSensitivity, weatherData, scheduleType } =
    await request.json();

  const { temperature, humidity, feelsLike, weather, windSpeed } = weatherData;

  const systemMessage = `너는 날씨에 맞는 옷차림을 추천해주는 스타일리스트야.
반드시 순수 JSON 문자열만 응답해.
다음 사항을 꼭 지켜:
- 마크다운 코드블록(\`\`\`, \`\`\`json 등)을 절대 사용하지 마.
- 설명 문장, 주석, 추가 텍스트를 절대 넣지 마.
- JSON 앞뒤에 공백 이외의 어떤 문자도 넣지 마.

스키마:
{
  "outfit_suggestions": [
    {
      "title": "string",
      "category": "office | casual | date | home | sports",
      "temperature_range": "string",
      "items": [
        { "type": "outer | top | bottom | shoes | accessory", "name": "string", "color": "string" }
      ],
      "tips": ["string"]
    }
  ]
}
`;

  const userMessage = `당신은 날씨에 맞는 패션 코디네이터입니다. 사용자의 스타일 선호도, 좋아하는 색상, 온도 민감도에 따라 최적의 옷차림을 추천해 주세요.
사용자의 스타일 선호도는 "${style}", 좋아하는 색상은 "${favoriteColor}", 온도 민감도는 "${tempSensitivity}"입니다.
현재 날씨 정보는 다음과 같습니다:
- 기온: ${temperature}°C
- 습도: ${humidity}%
- 체감 온도: ${feelsLike}°C
- 날씨 상태: ${weather}
- 풍속: ${windSpeed}Km/h

사용자의 오늘 일정은 "${scheduleType}"입니다.

이 정보를 바탕으로 사용자가 편안하고 스타일리시하게 느낄 수 있는 옷차림을 여러 개 추천해 주세요. 계절과 날씨에 맞는 소재와 색상을 고려하여 구체적인 아이템을 제안해 주세요.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemMessage,
        },
        { role: "user", content: userMessage },
      ],
    });
    return NextResponse.json({
      result: JSON.parse(completion.choices[0].message.content || "{}"),
    });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch from OpenAI API" },
      { status: 500 }
    );
  }
}
