import IconArrowLeft from '@/app/components/icons/IconArrowLeft';
import IconArrowRight from '@/app/components/icons/IconArrowRight';

interface ScrollButtonProps {
  direction: 'left' | 'right';
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

function ScrollButton({ direction, scrollRef }: ScrollButtonProps) {
  const handleSrollButtonClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full border-[1px] border-white focus:bg-neutral-400 md:flex"
      onClick={handleSrollButtonClick}
      aria-label={direction === 'left' ? '이전으로 스크롤' : '다음으로 스크롤'}
      tabIndex={0}
    >
      {direction === 'left' ? <IconArrowLeft /> : <IconArrowRight />}
    </button>
  );
}

export default ScrollButton;
