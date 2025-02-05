import axios from '@/app/lib/instance';
import ListContainer from '@/app/components/lists/ListContainer';

async function ChannelHome({ params }: { params: { channel: string } }) {
  const { channel } = params;

  const {
    data: { lists, hasNext },
  } = await axios.get(channel);

  console.log(channel);

  return <ListContainer channel={channel} hasNext={hasNext} lists={lists} />;
}

export default ChannelHome;
