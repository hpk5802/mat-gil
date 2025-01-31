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
      className={`text-white px-2 py-1 border border-white rounded-full text-xs md:text-md md:px-3 md:py-1.5 ${
        isActive &&
        'bg-active-bg text-active-text font-semibold cursor-not-allowed'
      }`}
    >
      {children}
    </Link>
  );
}

export default Tag;
