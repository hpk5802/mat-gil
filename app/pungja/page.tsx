import axios from '@/app/lib/instance';
import ListContainer from '@/app/components/lists/ListContainer';

async function page() {
  const {
    data: { lists },
  } = await axios.get('pungja');

  return <ListContainer lists={lists} />;
}

export default page;
