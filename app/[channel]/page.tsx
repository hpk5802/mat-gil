import axios from '@/app/lib/instance';
import ListContainer from '@/app/components/lists/ListContainer';
import { Metadata } from 'next';
import channelMap from '@/app/constants/channelMap';
import ListSchema from '@/app/components/seo/ListSchema';
import Card from '@/app/components/lists/Card';

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
      type: 'website',
      siteName: '맛길',
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
    <>
      <ListSchema channel={channel} lists={lists} />
      <ul
        className="mx-auto flex flex-wrap gap-x-[3%] gap-y-4 px-3 py-5 md:w-[46.25rem] md:gap-x-[2%] md:gap-y-5 md:px-0"
        role="list"
        aria-label="맛집 목록"
      >
        <Card channel={channel} lists={lists} />
        <ListContainer
          channel={channel}
          hasNext={hasNext}
          nextCursor={nextCursor}
        />
      </ul>
    </>
  );
}

export default ChannelHome;
