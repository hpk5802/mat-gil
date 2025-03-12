import { PropsWithChildren, useRef } from 'react';
import ScrollButton from '@/app/components/common/ScrollButton';

function TagContainer({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLUListElement | null>(null);

  return (
    <nav className="mx-auto mt-3 flex max-w-[46.25rem] items-center gap-2 px-3 md:px-0">
      <ul
        ref={scrollRef}
        className="flex touch-pan-x flex-nowrap gap-x-2 overflow-x-scroll md:overflow-hidden"
        aria-label="태그 목록"
      >
        {children}
      </ul>
      <ScrollButton direction="left" scrollRef={scrollRef} />
      <ScrollButton direction="right" scrollRef={scrollRef} />
    </nav>
  );
}

export default TagContainer;
