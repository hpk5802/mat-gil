import VideoPlayer from '@/app/components/detail/VideoPlayer';
import axios from '@/app/lib/instance';

async function DetailPage({
  params,
}: {
  params: { channel: string; id: string };
}) {
  const { channel, id } = await params;

  const {
    data: { list },
  } = await axios.get(`${channel}/${id}`);

  return (
    <div className="max-w-[46.25rem] mx-auto px-3 py-5">
      <div className="relative w-full aspect-[1.75/1]">
        <VideoPlayer videoId={list.videoId} lazy={list.thumbnailUrl} />
      </div>
      <div className="text-white mt-3 font-semibold line-clamp-2">
        {list.title}
      </div>
    </div>
  );
}

export default DetailPage;
