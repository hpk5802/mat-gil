import axios from 'axios';
import ListContainer from '../components/lists/ListContainer';

async function page() {
  const {
    data: { lists },
  } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hsc`, {
    params: {
      limit: 10,
    },
  });

  return <ListContainer lists={lists} />;
}

export default page;
