import React from 'react';

interface DetailSchemaProps {
  title: string;
  location: string;
  address: string;
  thumbnail: string;
  menu: string[];
}

function DetailSchema({
  title,
  location,
  address,
  thumbnail,
  menu,
}: DetailSchemaProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
      addressLocality: location,
      streetAddress: address,
    },
    name: title,
    description: `${title}의 메뉴와 위치를 확인하고, 길찾기 기능을 통해 해당 매장까지 간편하게 찾아가세요!`,
    image: thumbnail,
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          hasMenuItem: menu.map((item: string) => ({
            '@type': 'MenuItem',
            name: item,
          })),
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

export default DetailSchema;
