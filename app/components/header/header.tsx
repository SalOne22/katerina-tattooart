import Button from '@components/button';

import Logo from '@assets/icons/logo.svg';
import Burger from '@assets/icons/burger.svg';

export default function Header() {
  return (
    <header className="h-[3.875rem] border-b border-white/60">
      <div className="container h-full flex items-center justify-between">
        <Logo />
        <Button type="button" className="ml-auto mr-6">
          Безкоштовна консультація
        </Button>
        <Burger />
      </div>
    </header>
  );
}
