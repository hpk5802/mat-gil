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
    <header className="fixed w-full h-fit inset-0 z-10 bg-brand-background-opacity py-1">
      <h1 className="flex max-w-[75rem] px-3 mx-auto md:px-5">
        <Link href="/" className="flex items-center">
          <Logo className="w-9 h-9 md:w-12 md:h-12" />
          <span className="text-xl md:text-2xl text-white bagel-font">
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
