import axios from 'axios';

async function page() {
  const {
    data: { lists },
  } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hsc`, {
    params: {
      limit: 10,
    },
  });

  return (
    <div>
      {lists.map((list: any) => (
        <div key={list.snippet.title}>{list.snippet.title}</div>
      ))}
    </div>
  );
}

export default page;
