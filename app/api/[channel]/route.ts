import path from 'path';
import { promises as fs } from 'fs';
import { YoutubeData } from '@/app/types/youtube';

export async function GET(request: Request): Promise<Response> {
  try {
    // URL에서 파일 이름 추출 (예: /api/pungja -> pungja.json)
    const url = new URL(request.url);
    const pathname = url.pathname; // /api/{filename}
    const filename = pathname.split('/').pop(); // {filename}
    const jsonFileName = `${filename}.json`;

    // JSON 파일 경로 설정
    const filePath = path.join(process.cwd(), 'data', jsonFileName);

    // 파일 읽기
    const fileContents = await fs.readFile(filePath, 'utf-8');

    // JSON 파싱
    const data: YoutubeData[] = JSON.parse(fileContents);

    const limitParam = url.searchParams.get('limit');
    const cursorParam = url.searchParams.get('cursor');

    const limit = limitParam ? parseInt(limitParam, 10) : 10;
    const cursor = cursorParam ? parseInt(cursorParam, 10) : null;

    // cursor가 있으면 해당 position 이후 데이터 필터링
    const filteredData =
      cursor !== null ? data.filter((item) => item.position > cursor) : data;

    // 제한된 개수만큼 데이터 가져오기
    const limitedData = filteredData.slice(0, limit);

    // hasNext 설정 (더 가져올 데이터가 있는지 확인)
    const hasNext = filteredData.length > limit;

    return new Response(
      JSON.stringify({ success: true, lists: limitedData, hasNext }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
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
