import { YoutubeData } from '@/app/types/youtube';
import Card from './Card';

function ListContainer({ lists }: { lists: YoutubeData[] }) {
  return (
    <div>
      <div className="flex flex-wrap gap-[2%] gap-y-4 md:w-[45rem] mx-auto px-3 md:px-0">
        <Card lists={lists} />
      </div>
    </div>
  );
}

export default ListContainer;
