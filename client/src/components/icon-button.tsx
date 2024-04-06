import { ComponentProps } from 'react';
import { cn } from '../app/utils/cn';

interface IconButtonProps extends ComponentProps<'button'> {
  className?: string
}

export function IconButton ({className, ...props}: IconButtonProps) {
  return (
    <button {...props} className={cn('bg-white/10 border border-white/10 rounded-md p-2', props.disabled ? 'opacity-50 transition-all' : null, className,)}>{props.children}</button>
  );
}
