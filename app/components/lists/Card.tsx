import { YoutubeData } from '@/app/types/youtube';
import Link from 'next/link';
import IconMarker from '@/app/components/icons/IconMarker';
import Category from './Category';
import LazyImage from '@/app/components/common/LazyImage';

interface CardInterface {
  channel: string;
  lists: YoutubeData[];
}

function Card({ channel, lists }: CardInterface) {
  return lists.map(
    ({ videoId, position, thumbnail, title, category, location }) => (
      <div
        key={`${videoId}_${position}`}
        className="w-[48.5%] md:w-[32%] overflow-hidden rounded-xl bg-card hover:shadow-lg transition-all duration-300 group"
      >
        <Link href={`/${channel}/${position}`} className="flex flex-col">
          <div className="relative w-full aspect-[1.75/1]">
            <LazyImage thumbnail={thumbnail} alt="thumbnail" />
          </div>
          <div className="p-3 bg-card-background h-full md:h-[5.5rem]">
            <Category keyValue={`${channel}_${position}`} category={category} />
            <h3 className="text-sm md:text-base font-semibold line-clamp-1 text-gray-100 group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
            <div className="mt-1 text-gray-100 text-xs md:text-sm flex items-center justify-end gap-0.5">
              <IconMarker className="w-3.5 h-3.5" />
              {location}
            </div>
          </div>
        </Link>
      </div>
    ),
  );
}

export default Card;
