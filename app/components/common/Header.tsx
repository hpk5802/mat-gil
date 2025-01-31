import Link from 'next/link';
import Logo from '@/app/components/icons/Logo';

function Header() {
  return (
    <header className="bg-brand-background flex">
      <h1>
        <Link href="/" className="flex items-center">
          <Logo className="w-10 h-10" />
          <span className="text-xl text-white font-bold">맛길</span>
        </Link>
      </h1>
    </header>
  );
}

export default Header;
