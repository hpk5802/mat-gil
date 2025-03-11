import ChannelList from '@/app/components/landing/ChannelList';

export default function Home() {
  return (
    <main className="mx-auto flex flex-wrap gap-y-6 px-3 py-5 text-white md:w-[46.25rem] md:px-0">
      <section className="w-full text-center" aria-labelledby="main-title">
        <h1 id="main-title" className="mb-4 text-6xl font-bold text-orange-400">
          맛길
          <span className="mt-2 block text-2xl font-normal text-gray-300">
            당신의 맛있는 여정
          </span>
        </h1>
        <p className="mb-4 text-lg text-gray-400 md:text-xl">
          맛길을 따라 숨겨진 미식 세계를 경험해보세요.
          <br />
          특별한 맛의 여정이 여러분을 기다리고 있습니다!
        </p>
      </section>
      <section className="relative w-full" aria-labelledby="channel-title">
        <h2 id="channel-title" className="text-xl font-semibold">
          채널 목록
        </h2>
        <ChannelList />
      </section>
    </main>
  );
}
