import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface TagInteface {
  href: string;
  isActive?: boolean;
}

function Tag({ children, href, isActive }: PropsWithChildren<TagInteface>) {
  return (
    <li
      className={`flex-shrink-0 rounded-full border border-white px-2 py-1.5 text-xs focus:outline-none md:px-3 md:text-md md:focus:bg-neutral-400 ${
        isActive
          ? 'pointer-events-none bg-active-bg font-semibold text-active-text focus:bg-active-bg'
          : 'text-white'
      }`}
    >
      <Link
        href={href}
        tabIndex={isActive ? -1 : 0}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </Link>
    </li>
  );
}

export default Tag;
