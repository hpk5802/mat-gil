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
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${list.videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="text-white">{list.title}</div>
      <div className="text-white">{list.description}</div>
    </div>
  );
}

export default DetailPage;
