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
      className="justify-center items-center shrink-0 w-7 h-7 hidden md:flex"
      onClick={handleSrollButtonClick}
    >
      {direction === 'left' ? <IconArrowLeft /> : <IconArrowRight />}
    </button>
  );
}

export default ScrollButton;
