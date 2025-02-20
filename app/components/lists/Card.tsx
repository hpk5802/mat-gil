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
      <li
        key={`${videoId}_${position}`}
        className="w-[48.5%] md:w-[32%] bg-card transition-transform duration-300 group focus:outline-1 focus:outline-white"
      >
        <Link
          href={`/${channel}/${position}`}
          className="flex flex-col overflow-hidden rounded-xl"
          aria-label={`${title} 영상 보러가기`}
        >
          <div className="relative w-full aspect-[1.75/1]">
            <LazyImage thumbnail={thumbnail} alt={`썸네일: ${title}`} />
          </div>
          <div className="p-3 bg-card-background h-full md:h-[5.5rem]">
            <Category keyValue={`${channel}_${position}`} category={category} />
            <h3 className="text-sm md:text-base font-semibold line-clamp-1 text-gray-100">
              {title}
            </h3>
            <div className="mt-1 text-gray-100 text-xs md:text-sm flex items-center justify-end gap-0.5">
              <IconMarker className="w-3.5 h-3.5" />
              {location}
            </div>
          </div>
        </Link>
      </li>
    ),
  );
}

export default Card;
