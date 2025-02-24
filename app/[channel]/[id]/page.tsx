import Divider from '@/app/components/common/Divider';
import VideoPlayer from '@/app/components/video/VideoPlayer';
import DirectionWrap from '@/app/components/direction/DirectionWrap';
import IconMarker from '@/app/components/icons/IconMarker';
import Map from '@/app/components/Map/Map';
import axios from '@/app/lib/instance';
import Menu from '@/app/components/menu/Menu';

async function DetailPage({
  params,
}: {
  params: Promise<{ channel: string; id: string }>;
}) {
  const { channel, id } = await params;

  const {
    data: { list },
  } = await axios.get(`${channel}/${id}`);

  const { videoId, thumbnail, timeline, address, title, menu } = list;

  return (
    <>
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
    </>
  );
}

export default DetailPage;
