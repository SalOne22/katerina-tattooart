'use client';

import React, { useRef } from 'react';

import { cn } from '@/lib/utils';

import styles from './features.module.css';

function Features() {
  const list = useRef<HTMLUListElement>(null);

  const handleFeatureClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;

    if (target.classList.contains(styles.active)) return;

    const active = list.current?.querySelector(`.${styles.active}`);

    if (active) {
      active.className = target.className;
    }

    target.classList.remove(styles.prev, styles.next);
    target.classList.add(styles.active);

    const prev = list.current?.querySelector(`.${styles.prev}`);
    const next = list.current?.querySelector(`.${styles.next}`);

    prev?.classList.replace(styles.prev, styles.next);
    next?.classList.replace(styles.next, styles.prev);
  };

  return (
    <ul ref={list} className="text-center overflow-hidden relative h-7">
      <li
        className={cn(styles.feature, styles.prev)}
        onClick={handleFeatureClick}
      >
        Унікальний дизайн
      </li>
      <li
        className={cn(styles.feature, styles.active)}
        onClick={handleFeatureClick}
      >
        Професійність
      </li>
      <li
        className={cn(styles.feature, styles.next)}
        onClick={handleFeatureClick}
      >
        Безпека та гігієна
      </li>
    </ul>
  );
}

export default Features;
