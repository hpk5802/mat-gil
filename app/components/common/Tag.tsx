import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface TagInteface {
  href: string;
  isActive?: boolean;
}

function Tag({ children, href, isActive }: PropsWithChildren<TagInteface>) {
  return (
    <Link
      href={href}
      className={`px-2 py-1.5 border border-white rounded-full flex-shrink-0 text-xs md:text-md md:px-3 focus:bg-neutral-400 focus:outline-none ${
        isActive
          ? 'bg-active-bg text-active-text font-semibold cursor-not-allowed focus:bg-active-bg'
          : 'text-white'
      }`}
      tabIndex={isActive ? -1 : 0}
    >
      {children}
    </Link>
  );
}

export default Tag;
