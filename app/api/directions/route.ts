import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const start = searchParams.get('start');
  const goal = searchParams.get('goal');

  if (!start || !goal) {
    return NextResponse.json(
      { error: '출발지와 목적지를 확인해주세요.' },
      { status: 400 },
    );
  }

  try {
    const res = await axios.get(
      `https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving`,
      {
        params: { start, goal },
        headers: {
          'x-ncp-apigw-api-key-id': process.env.NAVER_CLIENT_ID,
          'x-ncp-apigw-api-key': process.env.NAVER_CLIENT_SECRET,
        },
      },
    );

    return NextResponse.json(res.data, {
      status: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { error: `길찾기에 실패했습니다: ${errorMessage}` },
      { status: 500 },
    );
  }
}
