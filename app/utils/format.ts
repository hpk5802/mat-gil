const convertMetersToKilometers = (meter: number): string =>
  `${Math.round(meter / 1000)}km`;

const convertMilliSecondsToTime = (milliSeconds: number): string => {
  const seconds = Math.floor(milliSeconds / 1000);
  const hour = Math.floor(seconds / 3600);
  const minutes = Math.ceil((seconds % 3600) / 60);

  if (hour > 0) return `${hour}시간 ${minutes}분`;
  else return `${minutes}분`;
};

const convertPriceToWon = (price: number): string =>
  `${price.toLocaleString('ko-kr')}원`;

export {
  convertMetersToKilometers,
  convertMilliSecondsToTime,
  convertPriceToWon,
};
