const getImageFileNameFromThumbnailUrl = (thumbnailUrl: string) => {
  return thumbnailUrl
    .replace('https://i.ytimg.com/vi/', '')
    .replace('/hqdefault.jpg', '')
    .concat('.webp');
};

export const getImageServerUrlFromThumbnail = (thumbnailUrl: string) => {
  const fileName = getImageFileNameFromThumbnailUrl(thumbnailUrl);
  return `https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Coworkers/user/1819/${fileName}`;
};
