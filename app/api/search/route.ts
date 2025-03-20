import axios from 'axios';
import { BlogData } from '@/app/types/blog';

export async function GET(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const query = url.searchParams.get('query');

    if (!query) {
      return new Response(
        JSON.stringify({
          success: false,
          message: '검색어를 입력해주세요.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const clientId = process.env.NEXT_PUBLIC_NAVER_DEVELOPER_CLIENT_ID;
    const clientSecret = process.env.NAVER_DEVELOPER_CLIENT_SECRET;
    const apiUrl = `https://openapi.naver.com/v1/search/blog.json?query=${encodeURIComponent(query)}&display=10`;

    const response = await axios.get<{ items: BlogData[] }>(apiUrl, {
      headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret,
      },
    });

    return new Response(
      JSON.stringify({ success: true, items: response.data.items }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('블로그 검색 오류:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: '블로그 검색 오류가 발생했습니다.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
