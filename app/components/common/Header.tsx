'use client';

import Link from 'next/link';
import Logo from '@/app/components/icons/Logo';
import Tag from '@/app/components/common/Tag';
import { useParams } from 'next/navigation';
import tags from '@/app/constants/tags';
import TagContainer from '@/app/components/TagContainer';

function Header() {
  const { channel } = useParams();

  return (
    <header className="fixed inset-0 z-10 h-fit w-full bg-brand-background-opacity py-1">
      <h1 className="mx-auto flex max-w-[75rem] px-3 md:px-5">
        <Link href="/" className="flex items-center">
          <Logo className="h-9 w-9 md:h-12 md:w-12" />
          <span className="bagel-font text-xl text-white md:text-2xl">
            맛길
          </span>
        </Link>
      </h1>
      <TagContainer>
        {tags.map((tag) => (
          <Tag
            key={`tag_${tag.title}`}
            href={tag.path}
            isActive={tag.path === `/${channel}`}
          >
            {tag.title}
          </Tag>
        ))}
      </TagContainer>
    </header>
  );
}

export default Header;
