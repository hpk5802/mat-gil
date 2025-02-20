import { PropsWithChildren, useRef } from 'react';
import IconArrowLeft from '@/app/components/icons/IconArrowLeft';
import IconArrowRight from '@/app/components/icons/IconArrowRight';

function TagContainer({ children }: PropsWithChildren) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex gap-2 items-center max-w-[46.25rem] mx-auto mt-3">
      <button
        className="flex justify-center items-center shrink-0 w-7 h-7"
        onClick={scrollLeft}
      >
        <IconArrowLeft />
      </button>
      <div
        ref={scrollRef}
        className="flex flex-nowrap touch-pan-x gap-x-2 md:overflow-hidden overflow-x-scroll hide-scroll"
        role="list"
        aria-label="태그 목록"
      >
        {children}
      </div>
      <button
        className="flex justify-center items-center shrink-0 w-7 h-7"
        onClick={scrollRight}
      >
        <IconArrowRight />
      </button>
    </div>
  );
}

export default TagContainer;
