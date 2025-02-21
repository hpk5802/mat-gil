import axios from '@/app/lib/instance';

const getRoute = async (start: string, goal: string) => {
  const res = await axios.get('directions', {
    params: { start, goal },
  });

  return res.data;
};

export default getRoute;
