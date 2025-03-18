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
        className="bg-card group w-[48.5%] transition-transform duration-300 focus:outline-1 focus:outline-white md:w-[32%]"
      >
        <Link
          href={`/${channel}/${position}`}
          className="flex flex-col overflow-hidden rounded-xl"
          aria-label={`${title} 영상 보러가기`}
        >
          <div className="relative aspect-[1.75/1] w-full">
            <LazyImage
              thumbnail={thumbnail}
              alt={`썸네일: ${title}`}
              sizes="(min-width: 780px) 237px, calc(48.48vw - 11px)"
            />
          </div>
          <div className="h-full bg-card-background p-3 md:h-[5.5rem]">
            <Category keyValue={`${channel}_${position}`} category={category} />
            <h2 className="line-clamp-1 text-sm font-semibold text-gray-100 md:text-base">
              {title}
            </h2>
            <div className="mt-1 flex items-center justify-end gap-0.5 text-xs text-gray-100 md:text-sm">
              <IconMarker className="h-3.5 w-3.5" />
              {location}
            </div>
          </div>
        </Link>
      </li>
    ),
  );
}

export default Card;
