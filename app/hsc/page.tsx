import axios from '@/app/lib/instance';
import ListContainer from '../components/lists/ListContainer';

async function page() {
  const {
    data: { lists },
  } = await await axios.get('hsc');

  return <ListContainer lists={lists} />;
}

export default page;
