import Link from 'next/link';
import Logo from '@/app/components/icons/Logo';

function Header() {
  return (
    <header className="fixed w-full h-fit inset-0 z-10 bg-brand-background-opacity py-1">
      <div className="flex max-w-[75rem] px-5 mx-auto">
        <h1>
          <Link href="/" className="flex items-center">
            <Logo className="w-12 h-12" />
            <span className="text-2xl text-white bagel-font">맛길</span>
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;
