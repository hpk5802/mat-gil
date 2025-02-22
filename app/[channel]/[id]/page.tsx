import Divider from '@/app/components/common/Divider';
import VideoPlayer from '@/app/components/detail/VideoPlayer';
import DirectionWrap from '@/app/components/direction/DirectionWrap';
import IconMarker from '@/app/components/icons/IconMarker';
import Map from '@/app/components/Map/Map';
import axios from '@/app/lib/instance';

async function DetailPage({
  params,
}: {
  params: Promise<{ channel: string; id: string }>;
}) {
  const { channel, id } = await params;

  const {
    data: { list },
  } = await axios.get(`${channel}/${id}`);

  const { videoId, thumbnail, timeline, address, title } = list;

  return (
    <>
      <div className="mx-auto max-w-[46.25rem] px-3 py-5 text-white">
        <div className="relative aspect-[1.75/1] w-full overflow-hidden">
          <VideoPlayer
            videoId={videoId}
            lazy={thumbnail}
            timeline={timeline}
            title={title}
          />
        </div>
        <div className="mt-3 line-clamp-2 font-semibold">{list.title}</div>
        <Divider />
        <div className="mb-2 flex items-center gap-1">
          <IconMarker className="h-3.5 w-3.5" />
          {address}
        </div>
        <DirectionWrap />
        <Map address={address} />
      </div>
    </>
  );
}

export default DetailPage;
