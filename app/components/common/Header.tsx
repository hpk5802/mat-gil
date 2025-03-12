'use client';

import Link from 'next/link';
import Logo from '@/app/components/icons/Logo';
import Tag from '@/app/components/common/Tag';
import { useParams, usePathname } from 'next/navigation';
import tags from '@/app/constants/tags';
import TagContainer from '@/app/components/TagContainer';

function Header() {
  const pathname = usePathname();
  const { channel } = useParams();

  return (
    <header className="fixed inset-0 z-10 h-fit w-full bg-brand-background-opacity py-1">
      <Link
        href="/"
        className="mx-auto flex max-w-[75rem] items-center px-3 md:px-5"
        aria-label="맛길 홈페이지로 이동"
      >
        <Logo className="h-9 w-9 md:h-12 md:w-12" />
        <span className="bagel-font text-xl text-white md:text-2xl">맛길</span>
      </Link>
      {pathname !== '/' && (
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
      )}
    </header>
  );
}

export default Header;
