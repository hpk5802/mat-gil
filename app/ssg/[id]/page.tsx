import axios from '@/app/lib/instance';

async function DetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  const {
    data: { list },
  } = await axios.get(`ssg/${id}`);
  console.log(list);
  return (
    <div>
      <div>{list.title}</div>
      <div>{list.description}</div>
    </div>
  );
}

export default DetailPage;
