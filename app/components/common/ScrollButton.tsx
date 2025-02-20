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
      className="justify-center items-center shrink-0 w-7 h-7 hidden md:flex rounded-full border-[1px] border-white"
      onClick={handleSrollButtonClick}
      aria-label={direction === 'left' ? '이전으로 스크롤' : '다음으로 스크롤'}
      tabIndex={0}
    >
      {direction === 'left' ? <IconArrowLeft /> : <IconArrowRight />}
    </button>
  );
}

export default ScrollButton;
