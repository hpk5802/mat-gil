import axios from '@/app/lib/instance';
import ListContainer from '@/app/components/lists/ListContainer';

async function page() {
  const {
    data: { lists, hasNext },
  } = await axios.get('bjw');

  return <ListContainer channel="bjw" hasNext={hasNext} lists={lists} />;
}

export default page;
