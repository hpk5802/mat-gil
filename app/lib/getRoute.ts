import axios from '@/app/lib/instance';
import { Direction } from '../types/directions';

type RouteResponse = {
  route: {
    traoptimal: Direction[];
  };
};

const getRoute = async (start: string, goal: string) => {
  try {
    const res = await axios.get<RouteResponse>('directions', {
      params: { start, goal },
    });

    return {
      isError: false,
      data: res.data.route.traoptimal[0] || null,
    };
  } catch (error) {
    return {
      isError: true,
      data: null,
    };
  }
};

export default getRoute;
