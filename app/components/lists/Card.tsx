import { YoutubeData } from '@/app/types/youtube';
import Image from 'next/image';
import Link from 'next/link';

function Card({ lists }: { lists: YoutubeData[] }) {
  // return lists.map((list) => (
  //   <div
  //     key={list.id}
  //     className="w-[48.5%] md:w-[32%] md:border-none border-gray-300 shadow-card rounded-lg overflow-hidden text-white"
  //   >
  //     <Link href={`/ssg/${list.position}`}>
  //       <div className="relative w-full aspect-[1.75/1]">
  //         <Image
  //           src={list.thumbnailUrl}
  //           className="object-cover -translate-y-0.5"
  //           fill
  //           alt="thumbnail"
  //         />
  //       </div>
  //       <div className="p-2 bg-card-background">
  //         <h3 className="text-xs md:text-md line-clamp-2 h-7 md:h-8">
  //           {list.title}
  //         </h3>
  //       </div>
  //     </Link>
  //   </div>
  // ));

  return lists.map((list) => (
    <div
      key={list.id}
      className="w-[48.5%] md:w-[32%] overflow-hidden rounded-xl bg-card hover:shadow-lg transition-all duration-300 group"
    >
      <Link href={`/ssg/${list.position}`} className="block">
        <div className="relative w-full aspect-video">
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
