import Link from 'next/link';

import User from '@assets/icons/user.svg';

export default function MobileMenu({ open }: { open: boolean }) {
  return (
    <div className="absolute bottom-0 translate-y-full py-[1.56rem] left-1/2 -translate-x-1/2 bg-alt-background w-[15.1875rem] text-center max-h-[calc(100dvh-3.875rem)] overflow-auto group-[[data-state='closed']]:opacity-0 transition-opacity duration-500">
      <div className="space-y-[1.125rem] flex flex-col items-center">
        <nav>
          <ul className="space-y-[1.125rem]">
            <li>
              <Link tabIndex={open ? undefined : -1} href="#">
                Про нас
              </Link>
            </li>
            <li>
              <Link tabIndex={open ? undefined : -1} href="#">
                Галерея
              </Link>
            </li>
            <li>
              <Link tabIndex={open ? undefined : -1} href="#">
                Догляд
              </Link>
            </li>
            <li>
              <Link tabIndex={open ? undefined : -1} href="#">
                Ціна
              </Link>
            </li>
            <li>
              <Link tabIndex={open ? undefined : -1} href="#">
                Відгуки
              </Link>
            </li>
            <li>
              <Link tabIndex={open ? undefined : -1} href="#">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>

        <button tabIndex={open ? undefined : -1}>UA</button>

        <User />
      </div>
    </div>
  );
}
