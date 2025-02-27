import axios, { AxiosResponse } from 'axios';
import type { MetadataRoute } from 'next';
import { ChannelResponse, YoutubeData } from '@/app/types/youtube';

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
    let hasNext = true;
    let nextCursor: number | null = null;

    while (hasNext) {
      const response: AxiosResponse<ChannelResponse> = await axios.get(
        `https://mat-gil.vercel.app/api/${channel}`,
        {
          params: { cursor: nextCursor, limit: 12 },
        },
      );
      const {
        lists,
        hasNext: newHasNext,
        nextCursor: newNextCursor,
      } = response.data;

      lists.forEach((item: YoutubeData) => {
        allPaths.push({
          url: `https://mat-gil.vercel.app/${channel}/${item.position}`,
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 0.7,
        });
      });

      nextCursor = newNextCursor;
      hasNext = newHasNext;
    }
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
