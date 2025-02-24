type Coordinates = [number, number];

type Summary = {
  distance: number; // 거리 (m)
  duration: number; // 소요 시간 (ms)
  taxiFare: number; // 택시 요금
  tollFare: number; // 통행료
};

type Direction = {
  path: Coordinates[];
  summary: Summary;
};

export type { Coordinates, Summary, Direction };
