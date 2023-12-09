import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

export type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, ...props }, ref) => {
    const As = asChild ? Slot : 'button';

    return (
      <As
        ref={ref}
        className={cn(
          'p-[0.625rem] text-sm/4 rounded-lg bg-white/[.14] border border-white/25 hover:bg-foreground hover:text-background transition-colors ease-out',
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
