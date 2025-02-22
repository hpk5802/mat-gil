import axios from '@/app/lib/instance';
import { Direction } from '../types/directions';

type RouteResponse = {
  route: {
    traoptimal: Direction[];
  };
};

const getRoute = async (start: string, goal: string) => {
  const res = await axios.get<RouteResponse>('directions', {
    params: { start, goal },
  });

  return res.data;
};

export default getRoute;
