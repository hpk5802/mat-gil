import path from 'path';
import { promises as fs } from 'fs';

interface YoutubeData {
  id: string;
  title: string;
  url: string;
}

export async function GET(request: Request): Promise<Response> {
  try {
    // JSON 파일 경로 설정
    const filePath = path.join(process.cwd(), 'data', 'seongsigyeong.json');

    // 파일 읽기
    const fileContents = await fs.readFile(filePath, 'utf-8');

    // JSON 파싱
    const data: YoutubeData[] = JSON.parse(fileContents);

    const url = new URL(request.url);
    const limitParam = url.searchParams.get('limit');
    const limit = limitParam ? parseInt(limitParam, 10) : data.length;

    const limitedData = data.slice(0, limit);

    return new Response(JSON.stringify({ success: true, lists: limitedData }), {
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
