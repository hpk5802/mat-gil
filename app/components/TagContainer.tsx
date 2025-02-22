import { PropsWithChildren, useRef } from 'react';
import ScrollButton from '@/app/components/common/ScrollButton';

function TagContainer({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <nav className="mx-auto mt-3 flex max-w-[46.25rem] items-center gap-2 px-3 md:px-0">
      <div
        ref={scrollRef}
        className="hide-scroll flex touch-pan-x flex-nowrap gap-x-2 overflow-x-scroll md:overflow-hidden"
        role="list"
        aria-label="태그 목록"
      >
        {children}
      </div>
      <ScrollButton direction="left" scrollRef={scrollRef} />
      <ScrollButton direction="right" scrollRef={scrollRef} />
    </nav>
  );
}

export default TagContainer;
