import { YoutubeData } from '@/app/types/youtube';
import Image from 'next/image';
import Link from 'next/link';

interface CardInterface {
  channel: string;
  lists: YoutubeData[];
}

function Card({ channel, lists }: CardInterface) {
  return lists.map((list) => (
    <div
      key={list.id}
      className="w-[48.5%] md:w-[32%] overflow-hidden rounded-xl bg-card hover:shadow-lg transition-all duration-300 group"
    >
      <Link href={`/${channel}/${list.position}`}>
        <div className="relative w-full aspect-[1.75/1]">
          <Image
            src={list.thumbnailUrl}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            alt={list.title}
          />
        </div>
        <div className="p-3 bg-card-background h-14 md:h-[4.5rem]">
          <h3 className="text-sm md:text-base font-medium line-clamp-2 text-gray-100 group-hover:text-white transition-colors duration-300">
            {list.title}
          </h3>
        </div>
      </Link>
    </div>
  ));
}

export default Card;
