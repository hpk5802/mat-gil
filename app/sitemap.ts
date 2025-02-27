import axios from 'axios';
import type { MetadataRoute } from 'next';

async function getDynamicPathsFromAPI() {
  const channels = [
    'pungja',
    'seongsigyeong',
    'hongseokcheon',
    'haennim',
    'baekjongwon',
  ];
  const allPaths: MetadataRoute.Sitemap = [];

  for (const channel of channels) {
    const response = await axios.get(
      `https://mat-gil.vercel.app/api/${channel}`,
    );
    const data = response.data;

    data.ids.forEach((id: string) => {
      allPaths.push({
        url: `https://mat-gil.vercel.app/${channel}/${id}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.7,
      });
    });
  }

  return allPaths;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicPaths = await getDynamicPathsFromAPI();

  return [
    {
      url: 'https://mat-gil.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...dynamicPaths,
  ];
}
