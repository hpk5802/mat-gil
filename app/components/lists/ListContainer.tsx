import { YoutubeData } from '@/app/types/youtube';
import Card from './Card';

function ListContainer({ lists }: { lists: YoutubeData[] }) {
  return (
    <div>
      <div className="flex flex-wrap gap-x-[3%] md:gap-x-[2%] gap-y-4 md:gap-y-5 md:w-[46.25rem] mx-auto px-3 py-5 md:px-0">
        <Card lists={lists} />
      </div>
    </div>
  );
}

export default ListContainer;
