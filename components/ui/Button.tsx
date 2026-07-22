import clsx from 'clsx';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'primary' | 'secondary' | 'ghost'; children: ReactNode };
export function Button({ variant = 'primary', className, children, ...props }: Props) {
  return <a className={clsx('focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5', variant === 'primary' && 'bg-mechanic text-carbon hover:bg-[#18c879]', variant === 'secondary' && 'border border-white/15 bg-white/10 text-technical hover:border-mechanic/60', variant === 'ghost' && 'text-muted hover:text-technical', className)} {...props}>{children}</a>;
}
