import path from 'path';
import { promises as fs } from 'fs';
import { YoutubeData } from '@/app/types/youtube';

// 데이터를 랜덤하게 셔플하는 함수 - 인덱스 i와 j의 데이터를 교환
function shuffleData<T>(data: T[]): T[] {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  return data;
}

export async function GET(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);

    // 경로에서 channel과 id 추출
    const pathname = url.pathname.split('/');
    const channel = pathname[pathname.length - 2]; // channel 부분

    if (!channel) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid request parameters.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    // JSON 파일 경로 설정
    const filePath = path.join(process.cwd(), 'data', `${channel}.json`);

    // 파일 읽기
    const fileContents = await fs.readFile(filePath, 'utf-8');

    // JSON 파싱 및 데이터 매핑
    const data: YoutubeData[] = JSON.parse(fileContents);

    const shuffledData = shuffleData(data);
    const selectedData = shuffledData.slice(0, 3);

    return new Response(JSON.stringify({ success: true, list: selectedData }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('데이터를 받아오는 중 에러가 발생했습니다:', error);
    return new Response(
      JSON.stringify({ success: false, message: '데이터 요청 실패' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
