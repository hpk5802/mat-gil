import { YoutubeData } from '@/app/types/youtube';

interface RecommandedSchemaProps {
  data: {
    channel: string;
    list: YoutubeData[];
  }[];
}

function RecommandedSchema({ data }: RecommandedSchemaProps) {
  const recommandedListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: data.flatMap(({ channel, list }) =>
      list.map((item, index) => {
        const category = Array.isArray(item.category)
          ? item.category.join(', ')
          : item.category;
        return {
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Restaurant',
            name: item.title,
            description: `${item.title}의 메뉴와 위치를 확인하고, 길찾기 기능을 통해 해당 매장까지 간편하게 찾아가세요!`,
            image: item.thumbnail,
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'KR',
              addressLocality: item.location,
              streetAddress: item.address,
            },
            video: {
              '@type': 'VideoObject',
              name: item.title,
              description: `${category} - ${item.location}`,
              thumbnailUrl: item.thumbnail,
              uploadDate: new Date().toISOString(),
              contentUrl: `https://mat-gil.vercel.app/${channel}/${item.position}`,
              embedUrl: `https://mat-gil.vercel.app/${channel}/${item.position}`,
              keywords: category,
              contentLocation: {
                '@type': 'Place',
                name: item.address,
              },
            },
          },
        };
      }),
    ),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(recommandedListSchema),
      }}
    />
  );
}

export default RecommandedSchema;
