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
      className={`px-2 py-1.5 border border-white rounded-full flex-shrink-0 text-xs md:text-md md:px-3 md:focus:bg-neutral-400 focus:outline-none ${
        isActive
          ? 'bg-active-bg text-active-text font-semibold focus:bg-active-bg pointer-events-none'
          : 'text-white'
      }`}
      tabIndex={isActive ? -1 : 0}
      role="link"
      aria-current={isActive ? 'page' : undefined}
      aria-disabled={isActive ? true : undefined}
    >
      {children}
    </Link>
  );
}

export default Tag;
