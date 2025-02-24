import axios from '@/app/lib/instance';
import ListContainer from '@/app/components/lists/ListContainer';

async function ChannelHome({
  params,
}: {
  params: Promise<{ channel: string }>;
}) {
  const { channel } = await params;

  const {
    data: { lists, hasNext },
  } = await axios.get(channel, {
    params: {
      limit: 18,
    },
  });

  return <ListContainer channel={channel} hasNext={hasNext} lists={lists} />;
}

export default ChannelHome;
