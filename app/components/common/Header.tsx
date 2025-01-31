import Link from 'next/link';
import Logo from '@/app/components/icons/Logo';

function Header() {
  return (
    <header className="bg-brand-background flex">
      <h1>
        <Link href="/" className="flex items-center">
          <Logo className="w-12 h-12" />
          <span className="text-2xl text-white bagel-font">맛길</span>
        </Link>
      </h1>
    </header>
  );
}

export default Header;
