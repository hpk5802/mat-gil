'use client';

import Link from 'next/link';
import Logo from '@/app/components/icons/Logo';
import Tag from '@/app/components/common/Tag';
import { usePathname } from 'next/navigation';

const tags = [
  {
    title: '또간집',
    path: '/pungja',
  },
  {
    title: '먹을텐데',
    path: '/ssg',
  },
  {
    title: '미식은 경험이다',
    path: '/hsc',
  },
];

function Header() {
  const path = usePathname();

  return (
    <header className="fixed w-full h-fit inset-0 z-10 bg-brand-background-opacity py-1">
      <div className="flex max-w-[75rem] px-3 mx-auto md:px-5">
        <h1>
          <Link href="/" className="flex items-center">
            <Logo className="w-9 h-9 md:w-12 md:h-12" />
            <span className="text-xl md:text-2xl text-white bagel-font">
              맛길
            </span>
          </Link>
        </h1>
      </div>
      <div className="flex gap-2 max-w-[75rem] mx-auto px-3 md:px-5 mt-3">
        {tags.map((tag) => (
          <Tag
            key={`tag_${tag.title}`}
            href={tag.path}
            isActive={tag.path === path}
          >
            {tag.title}
          </Tag>
        ))}
      </div>
    </header>
  );
}

export default Header;
