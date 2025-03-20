'use client';

import axios from '@/app/lib/instance';
import { BlogData } from '@/app/types/blog';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function removeHtml(text: string) {
  return text.replace(/<[^>]*>/g, '');
}

function BlogWrap({ query }: { query: string }) {
  const [items, setItems] = useState<BlogData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get<{ items: BlogData[] }>('search', {
        params: {
          query,
        },
      });
      setItems(data.items);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        items.map(({ title, link, description, postdate, bloggername }) => (
          <Link href={link} key={title} className="text-white">
            <h3>{removeHtml(title)}</h3>
            <p>{removeHtml(description)}</p>
            <p>{postdate}</p>
            <p>{bloggername}</p>
          </Link>
        ))
      )}
    </div>
  );
}

export default BlogWrap;
