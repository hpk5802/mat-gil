import axios from '@/app/lib/instance';
import ListContainer from '../components/lists/ListContainer';

async function page() {
  const {
    data: { lists, hasNext },
  } = await axios.get('hnim');

  return <ListContainer channel="hnim" hasNext={hasNext} lists={lists} />;
}

export default page;
