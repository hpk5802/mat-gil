import { YoutubeData } from '@/app/types/youtube';
import Image from 'next/image';
import Link from 'next/link';

function Card({ lists }: { lists: YoutubeData[] }) {
  return lists.map((list) => (
    <div key={list.id} className="w-[48.5%]">
      <Link href={`/ssg/${list.position}`}>
        <div className="relative w-full h-44 mb-2 rounded-lg overflow-hidden pb-2">
          <Image
            src={list.thumbnailUrl}
            className="object-cover"
            fill
            alt="thumbnail"
          />
        </div>
        <h3 className="text-md line-clamp-2 h-12">{list.title}</h3>
      </Link>
    </div>
  ));
}

export default Card;
