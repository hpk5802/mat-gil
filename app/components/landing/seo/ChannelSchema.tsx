import channelList from '@/app/constants/channelList';

function ChannelSchema() {
  const channelListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: channelList.map((channel, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: channel.name,
        url: `https://mat-gil.vercel.app/${channel.key}`,
        image: channel.image,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(channelListSchema) }}
    />
  );
}

export default ChannelSchema;
