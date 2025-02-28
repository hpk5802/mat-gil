import axios from '@/app/lib/instance';
import ListContainer from '@/app/components/lists/ListContainer';
import { Metadata } from 'next';
import channelMap from '@/app/constants/channelMap';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ channel: string }>;
}): Promise<Metadata> {
  const { channel } = await params;

  const title = `맛길 | 맛집 추천 & 길찾기 | ${channelMap[channel]}`;
  const description = `${channelMap[channel]}의 인기 맛집 리스트! 유튜브 영상으로 검증된 맛집 위치와 메뉴를 확인하고, 길찾기 기능으로 가까운 맛집에 방문해보세요!`;
  const imageUrl = 'https://mat-gil.vercel.app/images/logo.png';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://mat-gil.vercel.app/${channel}`,
      images: {
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: { url: imageUrl },
    },
  };
}

async function ChannelHome({
  params,
}: {
  params: Promise<{ channel: string }>;
}) {
  const { channel } = await params;

  const {
    data: { lists, hasNext, nextCursor },
  } = await axios.get(channel, {
    params: {
      limit: 18,
    },
  });

  return (
    <ListContainer
      channel={channel}
      hasNext={hasNext}
      nextCursor={nextCursor}
      lists={lists}
    />
  );
}

export default ChannelHome;
