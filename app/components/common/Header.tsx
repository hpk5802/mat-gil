import Link from 'next/link';
import Logo from '@/app/components/icons/Logo';

function Header() {
  return (
    <header className="fixed w-full h-fit inset-0 z-10 bg-brand-background-opacity py-1">
      <div className="flex max-w-[75rem] px-3 mx-auto md:px-5">
        <h1>
          <Link href="/" className="flex items-center">
            <Logo className="w-9 h-9 md:w-12 md:h-12" />
            <span className="text-xl md:text-2xl text-white bagel-font">
              맛길
            </span>
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;
