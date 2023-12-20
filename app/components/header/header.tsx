'use client';

import { useState } from 'react';

import Logo from '@assets/icons/logo.svg';

import Button from '@components/button';

import BurgerButton from './components/BurgerButton';
import MobileMenu from './components/MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="overflow-hidden fixed h-full w-full border-b top-0 border-white/60 data-[state=open]:max-h-[calc(3.875rem+24rem)] max-h-[3.875rem] group transition-[max-height] bg-background/80 duration-500"
      data-state={isMenuOpen ? 'open' : 'closed'}
    >
      <div className="container h-[3.875rem] flex items-center justify-between relative bg-background">
        <Logo />

        <Button
          type="button"
          className="absolute left-1/2 min-w-fit whitespace-nowrap -translate-x-1/2"
        >
          Безкоштовна консультація
        </Button>

        <BurgerButton onClick={() => setIsMenuOpen((prev) => !prev)} />

        <MobileMenu open={isMenuOpen} />
      </div>
    </header>
  );
}
