import Image from 'next/image';
import Link from 'next/link';

function Card({ lists }) {
  return lists.map((list: any) => (
    <div key={list.id} className="w-[48.5%]">
      <Link href={`/ssg/${list.snippet.position}`}>
        <div className="relative w-full h-44 mb-2 rounded-lg overflow-hidden pb-2">
          <Image
            src={list.snippet.thumbnails.medium.url}
            fill
            alt="thumbnail"
          />
        </div>
        <h3 className="text-md line-clamp-2 h-12">{list.snippet.title}</h3>
      </Link>
    </div>
  ));
}

export default Card;
