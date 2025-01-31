import { YoutubeData } from '@/app/types/youtube';
import Image from 'next/image';
import Link from 'next/link';

function Card({ lists }: { lists: YoutubeData[] }) {
  return lists.map((list) => (
    <div
      key={list.id}
      className="w-[48.5%] shadow-card rounded-lg overflow-hidden text-white"
    >
      <Link href={`/ssg/${list.position}`}>
        <div className="relative w-full h-44">
          <Image
            src={list.thumbnailUrl}
            className="object-cover -translate-y-0.5"
            fill
            alt="thumbnail"
          />
        </div>
        <div className="p-2">
          <h3 className="text-md line-clamp-2 h-8">{list.title}</h3>
        </div>
      </Link>
    </div>
  ));
}

export default Card;
