import channelList from '@/app/constants/channelList';
import LazyImage from '@/app/components/common/LazyImage';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-wrap gap-x-[3%] gap-y-4 px-3 py-5 text-white md:w-[46.25rem] md:gap-x-[2%] md:gap-y-5 md:px-0">
      <section className="w-full text-center" aria-labelledby="main-title">
        <h1 id="main-title" className="mb-4 text-6xl font-bold text-orange-400">
          맛길
          <span className="mt-2 block text-2xl font-normal text-gray-300">
            당신의 맛있는 여정
          </span>
        </h1>
        <p className="mb-4 text-xl text-gray-400">
          맛길을 따라 숨겨진 미식 세계를 경험해보세요.
          <br />
          특별한 맛의 여정이 여러분을 기다리고 있습니다!
        </p>
      </section>
      <section className="w-ful" aria-labelledby="channel-title">
        <h2 id="channel-title" className="text-xl">
          채널 목록
        </h2>
        <ul className="flex flex-wrap gap-x-[3%] gap-y-4">
          {channelList.map(({ key, name, image }) => (
            <li
              className="relative w-64 bg-card-background"
              key={`channel_${key}`}
            >
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
      </section>
    </main>
  );
}
