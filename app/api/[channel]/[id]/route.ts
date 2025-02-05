import path from 'path';
import { promises as fs } from 'fs';
import { RawYoutubeData, YoutubeData } from '@/app/types/youtube';

export async function GET(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);

    // 경로에서 channel과 id 추출
    const pathname = url.pathname.split('/');
    const channel = pathname[pathname.length - 2]; // channel 부분
    const id = pathname[pathname.length - 1]; // id 부분

    if (!channel || !id) {
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
    const rawData: RawYoutubeData[] = JSON.parse(fileContents);

    const data: YoutubeData[] = rawData.map((item) => ({
      id: item.id,
      position: item.snippet.position,
      title: item.snippet.title,
      thumbnailUrl: item.snippet.thumbnails.high.url,
    }));

    // id에 해당하는 데이터 찾기
    const target = data.find((item) => item.position === Number(id));

    if (!target) {
      return new Response(
        JSON.stringify({ success: false, message: 'Item not found.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ success: true, list: target }), {
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
