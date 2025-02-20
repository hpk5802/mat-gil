import { PropsWithChildren, useRef } from 'react';
import ScrollButton from '@/app/components/common/ScrollButton';

function TagContainer({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <nav className="flex gap-2 items-center max-w-[46.25rem] mx-auto mt-3 px-3 md:px-0">
      <div
        ref={scrollRef}
        className="flex flex-nowrap touch-pan-x gap-x-2 md:overflow-hidden overflow-x-scroll hide-scroll"
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
