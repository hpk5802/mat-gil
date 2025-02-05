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
    <div>
      <div className="text-white">{list.title}</div>
      <div className="text-white">{list.description}</div>
    </div>
  );
}

export default DetailPage;
