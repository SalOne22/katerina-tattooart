import Burger from '@assets/icons/burger.svg';
import Cross from '@assets/icons/cross.svg';

export default function BurgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="relative"
      aria-label="toggle mobile menu"
      onClick={onClick}
    >
      <Burger className="group-[[data-state='open']]:opacity-0 transition-opacity" />
      <Cross className="absolute top-0 group-[[data-state='closed']]:opacity-0 transition-opacity" />
    </button>
  );
}
