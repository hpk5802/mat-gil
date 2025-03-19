const getImageServerUrlFromThumbnail = (thumbnailUrl: string) => {
  return thumbnailUrl
    .replace('i.ytimg.com/vi/', 'optimized-images-mat-gil.netlify.app/images/')
    .replace('/hqdefault.jpg', '')
    .concat('.webp');
};

export default getImageServerUrlFromThumbnail;
