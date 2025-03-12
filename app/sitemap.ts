import axios, { AxiosResponse } from 'axios';
import type { MetadataRoute } from 'next';
import { ChannelResponse, YoutubeData } from '@/app/types/youtube';
import path from 'path';
import { promises as fs } from 'fs';

async function getChannelMaxCount(channel: string): Promise<number> {
  const filePath = path.join(process.cwd(), 'data', `${channel}.json`);
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const data: YoutubeData[] = JSON.parse(fileContents);

  return data.length;
}

async function getDynamicPathsFromAPI() {
  const channels = [
    'pungja',
    'seongsigyeong',
    'hongseokcheon',
    'haennim',
    'baekjongwon',
  ];
  const allPaths: MetadataRoute.Sitemap = [];

  const fetchChannelPaths = channels.map(async (channel) => {
    const maxCount = await getChannelMaxCount(channel);
    let nextCursor: number | null = null;

    const response: AxiosResponse<ChannelResponse> = await axios.get(
      `https://mat-gil.vercel.app/api/${channel}`,
      {
        params: { cursor: nextCursor, limit: maxCount },
      },
    );
    const { lists, nextCursor: newNextCursor } = response.data;

    lists.forEach((item: YoutubeData) => {
      allPaths.push({
        url: `https://mat-gil.vercel.app/${channel}/${item.position}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.7,
      });
    });

    nextCursor = newNextCursor;
  });

  await Promise.all(fetchChannelPaths);

  return allPaths;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicPaths = await getDynamicPathsFromAPI();

  return [
    {
      url: 'https://mat-gil.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://mat-gil.vercel.app/pungja',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://mat-gil.vercel.app/seongsigyeong',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://mat-gil.vercel.app/hongseokcheon',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://mat-gil.vercel.app/haennim',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://mat-gil.vercel.app/baekjongwon',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...dynamicPaths,
  ];
}
