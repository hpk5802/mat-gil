const convertTimeToSeconds = (time: string) => {
  const [min, sec] = time.split(':');

  return Number(min) * 60 + Number(sec);
};

export default convertTimeToSeconds;
