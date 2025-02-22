import axios from '@/app/lib/instance';

type Coordinates = [number, number];

type Direction = {
  path: Coordinates[];
  summary: {
    distance: number; // 거리 (m)
    duration: number; // 소요 시간 (ms)
    taxiFare: number; // 택시 요금
    tollFare: number; // 통행료
  };
};

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
