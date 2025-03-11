import channelList from '@/app/constants/channelList';
import LazyImage from '@/app/components/common/LazyImage';
import Link from 'next/link';

function ChannelList() {
  return (
    <ul className="flex flex-wrap gap-x-[3%] gap-y-4">
      {channelList.map(({ key, name, image }) => (
        <li className="relative w-64 bg-card-background" key={`channel_${key}`}>
          <Link href={`/${key}`} aria-label={`${name} 채널 보러가기`}>
            <div className="relative h-36 w-full">
              <LazyImage
                thumbnail={image}
                alt={`채널 썸네일: ${name}`}
                sizes="260px"
              />
            </div>
            <h3 className="p-2 text-lg font-semibold text-white">{name}</h3>
            <p className="sr-only">{name} 채널의 맛집을 확인해보세요.</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ChannelList;
