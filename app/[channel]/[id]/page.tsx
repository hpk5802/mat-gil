import Divider from '@/app/components/common/Divider';
import VideoPlayer from '@/app/components/video/VideoPlayer';
import DirectionWrap from '@/app/components/direction/DirectionWrap';
import IconMarker from '@/app/components/icons/IconMarker';
import Map from '@/app/components/Map/Map';
import axios from '@/app/lib/instance';
import Menu from '@/app/components/menu/Menu';
import { Metadata } from 'next';
import channelMap from '@/app/constants/channelMap';
import DetailSchema from '@/app/components/seo/DetailSchema';
import BlogWrap from '@/app/components/blog/BlogWrap';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ channel: string; id: string }>;
}): Promise<Metadata> {
  const { channel, id } = await params;
  const {
    data: { list },
  } = await axios.get(`${channel}/${id}`);
  const { title: restaurant } = list;

  const title = `맛길 | 맛집 추천 & 길찾기 | ${channelMap[channel]}`;
  const description = `${restaurant}의 메뉴와 위치를 확인하고, 길찾기 기능을 통해 해당 매장까지 간편하게 찾아가세요!`;
  const imageUrl = 'https://mat-gil.vercel.app/images/logo.png';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://mat-gil.vercel.app/${channel}/${id}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
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

async function DetailPage({
  params,
}: {
  params: Promise<{ channel: string; id: string }>;
}) {
  const { channel, id } = await params;

  const {
    data: { list },
  } = await axios.get(`${channel}/${id}`);

  const { videoId, thumbnail, timeline, address, title, menu, location } = list;

  return (
    <>
      <DetailSchema
        title={title}
        location={location}
        address={address}
        thumbnail={thumbnail}
        menu={menu}
      />
      <div className="mx-auto max-w-[46.25rem] px-3 py-5 text-white">
        <section aria-label="유튜브 영상">
          <div className="relative aspect-[1.75/1] w-full overflow-hidden">
            <VideoPlayer
              videoId={videoId}
              lazy={thumbnail}
              timeline={timeline}
              title={title}
            />
          </div>
        </section>
        <section aria-label="가게 이름 및 메뉴" className="mt-3">
          <h2 className="mb-2 line-clamp-2 text-xl font-semibold">
            {list.title}
          </h2>
          <Menu menu={menu} />
        </section>
        <Divider />
        <section aria-label="가게 위치 및 길 찾기">
          <div className="mb-2 flex gap-1">
            <IconMarker className="mt-1 h-3.5 w-3.5" />
            {address}
          </div>
          <DirectionWrap />
        </section>
        <section aria-label="지도">
          <Map address={address} />
        </section>
      </div>
      <section aria-label="블로그 포스팅">
        <BlogWrap query={title} />
      </section>
    </>
  );
}

export default DetailPage;
