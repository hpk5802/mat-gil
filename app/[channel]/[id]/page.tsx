import Divider from '@/app/components/common/Divider';
import VideoPlayer from '@/app/components/detail/VideoPlayer';
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
    <div className="max-w-[46.25rem] mx-auto px-3 py-5 text-white">
      <div className="relative w-full aspect-[1.75/1] overflow-hidden">
        <VideoPlayer
          videoId={videoId}
          lazy={thumbnail}
          timeline={timeline}
          title={title}
        />
      </div>
      <div className="mt-3 font-semibold line-clamp-2">{list.title}</div>
      <Divider />
      <div className="flex items-center gap-1 mb-2">
        <IconMarker className="w-3.5 h-3.5" />
        {address}
      </div>
      <Map address={address} />
    </div>
  );
}

export default DetailPage;
